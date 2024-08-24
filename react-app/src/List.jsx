export default function List({values}) {
    const ind = Math.floor(Math.random() * values.length);
    const el = values[ind];
    return (
        <>
            <h1>List of values: {values}</h1>
            <h2>Random element: {el}</h2>
            
        </>
    )
}