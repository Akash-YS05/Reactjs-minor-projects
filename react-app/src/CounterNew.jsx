import { useState } from "react"

export default function CounterNew() {

    const [count, setCount] = useState(0);
    const addThree = () => {
        setCount((current) => current +1);
        setCount((current) => current +1);
        setCount((current) => current +1);
    }
    return (
        <>
            <h1>Counter Page</h1>
            <p>Count: {count}</p>
            <button onClick={addThree}>+3</button>
        </>
    )
}