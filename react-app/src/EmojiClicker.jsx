import {v4 as uuid} from "uuid"
import { useState } from "react"


function RandomEmoji() {
    const choices = ["😊","🤣","😘","😒","😁","🤨"]
    return choices[Math.floor(Math.random()*choices.length)]
}

export default function EmojiClicker() {
    const [emojis, setEmojis] = useState([{id: uuid(), emoji: RandomEmoji()}])
    const addEmoji = () => {
        setEmojis((oldEmojis) => 
            [...oldEmojis, {id: uuid(), emoji: RandomEmoji()}]
        )
    }
    const deleteEmoji = (id) => {
        setEmojis(prevEmojis => {
            return prevEmojis.filter(e => e.id != id)

        })

    }
    return (
        <div>
            {emojis.map((e) => (
                <span onClick={() => deleteEmoji(e.id)} key={e.id} style={{fontSize: '4rem', cursor: 'pointer'}}>{e.emoji}</span>
                
            ))}
            <button onClick={addEmoji}>Add Emoji</button>
        </div>
    )
} 