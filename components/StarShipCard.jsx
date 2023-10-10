// import { Link } from  'react-router-dom'


const StarShipCard = (props) => {


  return (
    <>
      <h1> hello </h1>
      {props.starships.map(starship => 
        <div className="starship-card" key={starship.name}>
        
        </div>
      

      )}
    </>
  )
}

export default StarShipCard























// import { getAllStarShips } from '../services/sw-api'


// const StarShipCard = () => {
//   const [starships, setStarShips] = useState([])

//   useEffect(() => {
//     const fetchStarShips = async ()  => {
//       const starshipsData = await getAllStarShips()
//       setStarShips(starshipsData)
//     }
//     fetchStarShips
//   }, [])
  
// if (!starships.length) return <h1>Loading Starships...</h1>