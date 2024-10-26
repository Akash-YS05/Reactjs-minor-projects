import {useEffect, useState} from "react"

export default function UseEffect100x() {
    const [count, setCount] = useState(0)

    useEffect(function() {
        setInterval(function() {
            setCount(c => c+1)
        }, 1000)
    }, [])
    return <div>
        {count}
    </div>
}