import { Box, TextField } from "@mui/material";
import { useState } from "react";

export default function FormDemo() {
  const [name, setName] = useState("");
  const changeName = (e) => {
    setName(e.target.value)
  }
  return (
    <Box sx={{border: '1px solid black', height: 300, width: 400, margin: '0 auto', p: 4, borderRadius: '10px'}}>
        <h1>Name is : {name}</h1>
      <TextField
        id="outlined-basic"
        placeholder="Text field!"
        label="Outlined"
        variant="outlined"
        value = {name}
        onChange={changeName}
      />
    </Box>
  );
}
