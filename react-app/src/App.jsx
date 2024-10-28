import { createContext, useContext, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Die from './Die'
import Greet from './Greet'
import List from './List'
import Shopcart from './Shopcart'
import Rental from './Rental'
import Counter from './Counter'
import ColorGrid from './ColorGrid'
import ColorBoxGrid from './ColorBoxGrid'
import CounterNew from './CounterNew'
import ScoreKeeper from './ScoreKeeper'
import EmojiClicker from './EmojiClicker'
import ScoreKeeperNew from './ScoreKeeperNew'
import DieNew from './DieNew'
import Dice from './Dice'
import LuckyN from './LuckyN'
import { sum } from './utils'
import UsernameForm from './UsernameForm'
import UseEffect100x from './useEffect100x'
import Signup from './Signup'
import FetchQuote from './fetchQuote(useState)'
import FetchQuoteLoader from './assets/FetchQuoteLoader'
import UseRef from './UseRef'
import Useref2 from './UseRef2'



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


const colors = [
  "#E53935",
  "#E91E63",
  "#9C27B0",
  "#673AB7",
  "#3F51B5",
  "#2196F3",
  "#03A9F4",
  "#00BCD4",
  "#009688",
  "#4CAF50",
  "#8BC34A",
  "#CDDC39",
  "#FFEB3B",
  "#FFC107",
  "#FF9800",
  "#FF5722",
];


function lessThan4(dice) {
  return sum(dice) < 4
}

function AllSame(dice) {
  return dice.every((v) => v === dice[0])
}

const BulbContext = createContext()

function BulbProvider({children}) {
  const [bulbOn, setBulbOn] = useState(true)

  return <BulbContext.Provider value={{
    bulbOn: bulbOn,
    setBulbOn: setBulbOn
  }}>
 
    {children}

  </BulbContext.Provider>
}

//custom hook
function useCounter() {
  const [count, setCount] = useState(0)

  function increaseCount() {
    setCount(c=>c+1)
  }

  return {
    count: count,
    increaseCount: increaseCount
  }
}

//custom hook - fetches data from custom url from backend
function useFetch(url) {
  const [post, setPost] = useState({})
  const [loading, setLoading] = useState(true)

  async function getPosts() {
    setLoading(true)
    const response = await fetch(url)
    const json = await response.json()

    setPost(json)
    setLoading(false)
  }
  //cant make the argument function in useEffect as async
  useEffect(()=>{
    getPosts()
  }, [url])

  // useEffect(()=>{
  //   setInterval(getPosts, 10000);
  // }, [])

  return {
    post,
    loading
  }
}

//custom hook - provides the last value of the state before it re renders and updates
function usePrev(value) {

  const ref = useRef()

  useEffect(()=>{
    ref.current = value
  }, [value])

  return ref.current
}


//custom hook - sends arequest to backend after a timeout when the user is typing frantically (prevents spamming on backend)
function useDebounce(originalFn) {
  const currentClock = useRef()

  function fn() {
    clearTimeout(currentClock)
    currentClock.current = setTimeout(originalFn, 1000)
  }

  return fn
}

function App() {
  const {count, increaseCount} = useCounter()
  const [currentPost, setCurrentPost] = useState(1)
  const {post, loading} = useFetch("https://jsonplaceholder.typicode.com/posts/" + currentPost)
  const [state, setState] = useState(0)
  const prev = usePrev(state)
  function backendData() {
    fetch("api.amazon.com/search")
  }
  const debouncedFn = useDebounce(backendData)

  if (loading) {
    return <div>
      loading...
    </div>
  }

  return (

    <>
      {/* <div>
        <BulbProvider>
          <Light/>
        </BulbProvider>
      </div> */}
      {/* <Shopcart items={data}/> */}
      {/* <Die num = {10}/>
      <Greet name="Akash"/>
      <Greet name="Aman"/>
      <Greet name="Abhi"/>
      <List values={[1, 2, 3, 4, 5]}/>
      <List values={["a", "b", "c", "d"]}/> */}
      {/* <Rental properties={properties}/> */}
      {/* <Counter/> --- correct counter method - CounterNew*/} 
      {/* <ColorBoxGrid colors={colors}/> */}
      {/* <CounterNew/> */}
      {/* <ScoreKeeper/> */}
      {/* <EmojiClicker/> */}
      {/* <ScoreKeeperNew players={3} target={5}/> */}
      {/* <DieNew val={3}/> */}
      {/* <Dice dice={[3, 4, 5, 6]}/> */}
      {/* <LuckyN winCheck={lessThan4} title="Roll Less Than 4!"/>
      <LuckyN winCheck={AllSame} title="Roll the Same Number!"/> */}
      {/* <UsernameForm/> */}
      {/* <Signup/> */}
      {/* <FetchQuote/> */}
      {/* <FetchQuoteLoader/> */}
      {/* <UseEffect100x/> */}
      {/* <UseRef/> */}
      {/* <Useref2/> */}

        {/* <div>
          <button onClick={() => setCurrentPost(1)}>1</button>
          <button onClick={() => setCurrentPost(2)}>2</button>
          <button onClick={() => setCurrentPost(3)}>3</button>
          {JSON.stringify(post)}
        </div> */}
        {/* <div>
          {state}
          <button onClick={() => setState(s=>s+1)}>Click me</button>
          <p>Initial state was {prev}</p>
        </div> */}
        <input type="text" onChange={debouncedFn} />

    </>
  )
}




function Light() {
  return <div>
    <LightBulb />
    <LightSwitch />
  </div>
}

function LightBulb() {

  const {bulbOn} = useContext(BulbContext)

  return <div>
    {bulbOn ? "Light On" : "Light Off"}
  </div>
}

function LightSwitch() {

  const {bulbOn, setBulbOn} = useContext(BulbContext)

  function toggle() {
    setBulbOn(!bulbOn)
  }
  return <button onClick={toggle}>Toggle Light</button>
}

export default App
