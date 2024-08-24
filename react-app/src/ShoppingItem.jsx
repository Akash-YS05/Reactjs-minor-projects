function ShoppingItem({name, price, taken}) {
    const styles = {color: taken ? 'green' : 'red', textDecoration: taken ? 'line-through' : 'none'}
    return (
        <li style={styles}>
            {name} - {price}
        </li>
    )

}

export default ShoppingItem