export default function Die({num, color="Red"}) {      //color - default prop value
    const roll = Math.floor(Math.random()*num) + 1;
    return (
        <h1>{color} colored Die Roll: {roll}</h1>
    )
}