import { Rating } from "@mui/material";
import { useState } from "react";

export default function RatingDemo() {
    const [score, setScore] = useState(3);
    return (
        <div>
            <h1>Raying Demo - Current Score: {score}</h1>
            <Rating
                name="simple-controlled"
                value={score}
                onChange={(event, newValue) => {
                    setScore(newValue)
                }}
            ></Rating>
        </div>
    )
}