import ColorGrid from "./ColorGrid";
import "./ColorBoxGrid.css"
export default function ColorBoxGrid({colors}) {
    const boxes = []
    for (let i=0; i<25; i++) {
        boxes.push(<ColorGrid colors={colors}/>)
    }
    return (
        <div className="ColorGrid">
            {boxes}
        </div>
        
    )
}