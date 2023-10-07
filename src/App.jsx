import { useEffect, useState } from 'react'
import { getAllStarShips } from '../services/sw-api'
import './App.css'

function App() {
  const [starships, setStarShips] = useState([])

  useEffect(() => {
    const fetchStarShips = async () = => {
      const starshipsData = await getAllStarShips()
      setStarShips(starshipsData)
    }
    fetchStarShips
  }. [] )
  
  
  return (
    <>

    
    </>
  )
}

export default App
