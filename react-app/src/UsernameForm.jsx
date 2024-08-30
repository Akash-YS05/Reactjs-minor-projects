import { useState } from "react"

export default function UsernameForm() {
    const [username, setUsername] = useState("")
    const updateUsername = (evt) => {
        // console.log(evt.target.value)
        setUsername(evt.target.value)
    }
    return (
        <div>
            <label htmlFor="uname">Enter Username</label>
            <input type="text" placeholder="username" value={username} onChange={updateUsername} id="uname" />
            <button>Submit</button>
        </div>
    )
}