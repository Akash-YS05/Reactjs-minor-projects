import { useState } from "react";
import { getRolls, sum } from "./utils";
import Dice from "./Dice";

export default function({title="Dice Game!", numDice=2, winCheck}) {
    const [dice, setDice] = useState(getRolls(numDice))
    const isWinner = winCheck(dice);
    const reRoll = () => {
        setDice(getRolls(numDice))
    }
    return (
        <main className="LuckyN">
            <h1>{title}</h1>
            <Dice dice={dice} />
            <button onClick={reRoll}>Roll Again</button>
            <h1 style={{color: 'green'}}>{isWinner && "You Win!"}</h1>
        </main>
    )
}