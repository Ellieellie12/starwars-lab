import { useEffect, useState } from 'react'
import { getAllStarShips } from '../services/sw-api'
import './App.css'
import StarShipCard from '../components/StarShipCard'

function App() {

  return (
    <>
      <h1> hello </h1>
      <StarShipCard /> 
    </>
  )
}

export default App
