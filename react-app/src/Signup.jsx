import { useState } from "react"

export default function Signup() {
    const [formData, setFormData] = useState({firstname: "", lastname: "", password: ""})
    
    const handleChange = (evt) => {
        const changeField = evt.target.name
        const newValue = evt.target.value
        setFormData((currData) => {
            return {
                ...currData,
                [changeField]: newValue
            }
        })
    }
    return (
        <div style={{display: 'flex', flexDirection: 'column', border: '2px solid white', padding: '30px', borderRadius: '10px'}}>
            <h1>Sign-up Form</h1>
            <label htmlFor="firstname">Enter First Name</label>
            <input style={{padding: '5px', margin: '5px'}} type="text" placeholder="First name" value={formData.firstname} onChange={handleChange} id="firstname" name="firstname" />
            <label htmlFor="lastname">Enter Last Name</label>
            <input style={{padding: '5px', margin: '5px'}} type="text" placeholder="Last name" value={formData.lastname} onChange={handleChange} id="lastname" name="lastname" />
            <label htmlFor="password">Enter Password</label>
            <input style={{padding: '5px', margin: '5px'}} type="password" placeholder="password" value={formData.password} onChange={handleChange} id="password" name="password" />
            <button style={{margin:'20px', border: '1px solid white'}}>Submit</button>
        </div>
    )
}