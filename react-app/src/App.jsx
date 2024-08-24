import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Die from './Die'
import Greet from './Greet'
import List from './List'
import Shopcart from './Shopcart'
import Rental from './Rental'


const data = [
  {name: "milk", price: 80, taken: true},
  {name: "egg", price: 50, taken: false},
  {name: "rice", price: 120, taken: true},
  {name: "wheat", price: 150, taken: false},
]

const properties = [
  { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
  { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
  { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
  { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
  { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
  { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
]


function App() {
  const [count, setCount] = useState(0)

  

  return (
    <>
      {/* <Shopcart items={data}/> */}
      {/* <Die num = {10}/>
      <Greet name="Akash"/>
      <Greet name="Aman"/>
      <Greet name="Abhi"/>
      <List values={[1, 2, 3, 4, 5]}/>
      <List values={["a", "b", "c", "d"]}/> */}
      <Rental properties={properties}/>
    </>
  )
}

export default App
