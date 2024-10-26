import { useRef, useState } from "react"

export default function Useref2() {
    const [currentCount, setCurrentCout] = useState(1)
    const timer = useRef()
    function startClock() {
        let clock = setInterval(() => {
            setCurrentCout(c=>c+1)
        }, 1000);
        timer.current = clock
    }
    function stopClock() {
        clearInterval(timer.current)

    }
    return (
        <div>
            <h1>{currentCount}</h1>
            <br />
            <button onClick={startClock}>Start</button>
            <button onClick={stopClock}>Stop</button>
        </div>
    )
}