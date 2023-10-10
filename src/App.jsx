// import { useEffect, useState } from 'react'
// import {Route, Routes} from 'react-router-dom'
import './App.css'
import StarShipCard from '../components/StarShipCard'
import { getAllStarShips } from '../services/sw-api'
import { useEffect, useState } from 'react'

function App() {
    const [starships, setStarShips] = useState([])
    //useState is a hook that defines the state/ initialized state
  
    useEffect(() => {
      const fetchStarShips = async ()  => {
        const starshipsData = await getAllStarShips()
        setStarShips(starshipsData.results)
      }
      fetchStarShips()
    }, [])
    
  if (!starships.length) return <h1>Loading Starships...</h1>
  

  return (
    <>
      <StarShipCard starships={starships} /> 
    </>
  )
  }

export default App







{/* <h1> hello </h1> */}