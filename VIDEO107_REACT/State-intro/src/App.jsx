import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[count,setCount]=useState(2);//usestate is a hook

  //count:it is a state
  //setCount:it is a function which help to change the value of state
  //useState:It is a function which help to intitialize the value of the state

  return (
    <>
      <button onClick={()=>{setCount(count ** 2)}}>Update Value:{count}</button>
    </>
  )
}

export default App
