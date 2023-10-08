import { useEffect, useState } from "react"
import { getAllStarShips } from '../services/sw-api'
// import { Link } from  'react-router-dom'


const StarShipCard = () => {
  const [starships, setStarShips] = useState([])

  useEffect(() => {
    const fetchStarShips = async ()  => {
      const starshipsData = await getAllStarShips()
      setStarShips(starshipsData)
    }
    fetchStarShips
  }, [])
  
if (!starships.length) return <h1>Loading Starships...</h1>

  return (
    <>
      <h1> hello </h1>
      {starships.map(starship =>
      <div key= {starship.length}>
        {starship.name}
      </div>
      )}
    </>
  )
}

export default StarShipCard
