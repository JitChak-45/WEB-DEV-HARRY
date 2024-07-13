import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Card from '../../components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    
    <div className='cards'>

    
      <Card title="card1" description="About card1" />
      <Card title="card2" description="About card2"/>
      <Card title="card3" description="About card3"/>
      <Card title="card4" description="About card4"/>
      </div>
    
    <Footer/>
    </>
  )
}

export default App
