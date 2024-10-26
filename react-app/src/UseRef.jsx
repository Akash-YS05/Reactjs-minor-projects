import { useRef } from "react"
//useref() creates a refrence to a value or DOM and when we change it, the component does not re render.
export default function UseRef() {
    //by DOM - document.getElementById(id) - not preferred
    const ref = useRef()
    function focusChange() {
        ref.current.focus()
    }

    return (
        <div>
            <input ref={ref} type="text" name="" />
            <input type="text" name="" />
            <button onClick={focusChange}>Submit</button>
        </div>
    )
}