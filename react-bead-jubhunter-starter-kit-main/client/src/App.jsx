import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import JobNav from './Components/JobNav/JobNav'
import Profile from './Components/Profile/Profile'
import Home from './Components/Home/Home'

import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <JobNav/>
    <Profile></Profile>
    </>  
  )
}

export default App
