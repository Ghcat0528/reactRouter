import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Routes, Route, Link } from "react-router-dom";
import viteLogo from '/vite.svg'
import './App.css'
import blue from './components/blue'
import red from './components/red'
import home from './components/home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="container">
      <div id="navbar"> 
        <Link to="/blue">blue</Link>
        <Link to="/red">red</Link>
        <Link to="/">home</Link>

      </div>
     
     <div id="main-section">
      <Routes>
      <Route path="/" element={<div className = "home"><h1>Home</h1></div>} />
      <Route path ="/blue" element={<div className = "blue"><h1>Blue</h1></div>} />
      <Route path ="/red"  element={<div className="red"><h1>Red</h1></div>} />
      </Routes>
      </div>
      </div>
      
      
    </>
  )
  }


export default App
