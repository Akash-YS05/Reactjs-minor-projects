import { useState } from "react"

export default function ScoreKeeperNew({players=3, target=5}) {
    const [scores, setScores] = useState(new Array (players).fill(0))
    const incrementScore = (idx) => {
        setScores((prevScores) => {
            const copy = [...prevScores]
            copy[idx]+=1
            return copy
        })
    }

    const reset = () => {
        setScores(new Array (players).fill(0))
    }
return (
    <div>
        <h1>Score Keeper .</h1>
        <button onClick={reset}>Reset Scores</button>
        <ul>
            {scores.map((s, idx) => {
                return <li key={idx}>
                    <h2>Player {idx+1} - {s}</h2>
                    <button onClick={()=>incrementScore(idx)}>+ 1</button>
                    {s >= target && <h2 style={{color: 'green'}}>You Win!</h2>}
                </li>
            })}
        </ul>
    </div>
)
}