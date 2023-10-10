import { useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import ShipList from './pages/ShipList/ShipList'
import ShipDetailsWithoutLocationHook from './ShipDetailsWithParams/ShipDetailsWithParams'
import Nav from './components/Nav/Nav'

import './App.css'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav />
      <Routes>
        <Route path='/ships' element={<ShipList />}  />
        <Route path='/ships/:shipId' element={<ShipDetailsWithoutLocationHook />}  />
        <Route path='/ships/details' element={<ShipDetailsWithLocationHook />}  />
      </Routes>
    </>
  )
}

export default App
















































// import { useEffect, useState } from 'react'











// import {Route, Routes} from 'react-router-dom'
// import './App.css'
// import StarShipCard from '../components/StarShipCard'
// import { getAllStarShips } from '../services/sw-api'
// import { useState } from 'react'
// import Nav from './components/Nav/Nav'

// function App() {
//     const [starships, setStarShips] = useState([])
//     //useState is a hook that defines the state/ initialized state
  
//     useEffect(() => {
//       const fetchStarShips = async ()  => {
//         const starshipsData = await getAllStarShips()
//         setStarShips(starshipsData.results)
//       }
//       fetchStarShips()
//     }, [])
    
//   if (!starships.length) return <h1>Loading Starships...</h1>
  

//   return (
//     <>
//       <StarShipCard starships={starships} /> 
//     </>
//   )
//   }

// export default App


// import './App.css'

// function App() {
//   const [starships, setStarShips] = useState([])
//   // const [count, setCount] = useState(0)

//   return (
//     <>
//     <Nav />
//       <Routes>
//         <Route path='/starships' element={<StarShipCard />}  />
//       </Routes>
//     </>
//   )
// }

// export default App


{/* <Route path='/ships/:shipId' element={<ShipDetailsWithoutLocationHook />}  />
 <Route path='/ships/details' element={<ShipDetailsWithLocationHook />}  /> 











{/* <h1> hello </h1> */}