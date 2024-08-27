import { useState } from "react"

export default function() {
    const [scores, setScores] = useState({p1Score: 0, p2Score: 0})
    function p1Increment() {
        setScores((oldScore) => {
            return {...oldScore, p1Score: oldScore.p1Score + 1}
        })
    }
    function p2Increment() {
        setScores((oldScore) => {
            return {...oldScore, p2Score: oldScore.p2Score + 1}
        })
    }
    return (
        <>
            <h2>Player 1: {scores.p1Score}</h2>
            <h2>Player 2: {scores.p2Score}</h2>
            <button style={{margin: '10px'}} onClick={p1Increment}>Player 1 (+1)</button>
            <button onClick={p2Increment}>Player 2 (+1)</button>
        </>
    )
}