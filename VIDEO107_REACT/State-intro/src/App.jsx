import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[count,setCount]=useState(2);//usestate is a hook

  return (
    <>
      <button onClick={()=>{setCount(count ** 2)}}>Update Value:{count}</button>
    </>
  )
}

export default App
