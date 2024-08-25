import { useState } from "react"
import "./ColorGrid.css"

function randomEl(arr) {
    const ind = Math.floor(Math.random() * arr.length) + 1
    return arr[ind]
}

export default function ColorGrid({colors}) {
    const [color, setColor] = useState(randomEl(colors))
    const changeColor = () => {
        const randColor = randomEl(colors);
        setColor(randColor)
    }
    return (
        <div className="ColorBox" onClick={changeColor} style={{backgroundColor: color}}></div>
        
    )

}