import DieNew from "./DieNew"
import "./Dice.css"

export default function Dice({dice}) {
    return(
        <section className="Dice">
            {dice.map((v, i) => (
                <DieNew key={i} val={v}/>
            ))}
        </section>
    )
}