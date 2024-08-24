export default function RentProperty({id, name, rating, price}) {

    return (
        <li style={{listStyle: 'none'}}>
            <h2>{name}</h2>
            <h3>Price - ${price}</h3>
            <h3>Rating - {rating}⭐</h3>
            {/* {p.name} ({p.price}) : {p.rating} */}
        </li>
    )

}