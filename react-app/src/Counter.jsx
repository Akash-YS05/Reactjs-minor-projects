import { useState } from "react";

export default function() {
    const [num, setNum] = useState(0);
    const changeNum = () => {
        setNum(num+1);
    }
    return (
        <div>
            <p>Button clicked: {num} times</p>
            <button onClick={changeNum}>Click Me</button>
        </div>
    )
}