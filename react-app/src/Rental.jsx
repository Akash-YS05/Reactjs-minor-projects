import RentProperty from "./RentProperty";

export default function Rental({properties}) {
    return (
        <div>
            <h1>Rental Information</h1>
            <ul style={{display: 'flex'}}>
            {properties.map((p) => (
                // <li style={{listStyle: 'none'}}>
                //     <h2>{p.name}</h2>
                //     <h3>Price - ${p.price}</h3>
                //     <h3>Rating - {p.rating}</h3>
                //     {/* {p.name} ({p.price}) : {p.rating} */}
                // </li>
                <RentProperty key={p.id} {...p}/>
            ))}
            </ul>
            
        </div>
    )
}