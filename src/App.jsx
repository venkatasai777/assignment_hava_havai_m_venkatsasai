import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Airports from './components/Services/Airports'
import SpecificAirport from './components/SpecificAirport'

function App() {
  return (
   <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path='/services/airport' element={<Airports />} />
    <Route exact path='/services/airport/details' element={<SpecificAirport />} />
   </Routes>
  )
}

export default App
