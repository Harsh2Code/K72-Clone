import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Components/Navigation/Navbar'
import Home from './Components/Home/Home'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import FullScreenNav from './Components/Navigation/FullScreenNav'
import NavContext from './Context/NavContext'
import Projects from './Components/Projects/Projects'


function App() {
  const [count, setCount] = useState(0)


  return (
    <NavContext>
      <div className="text-white">
        <Navbar />
        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
        </Routes >
        <FullScreenNav />
      </div>
    </NavContext>
  )
}

export default App
