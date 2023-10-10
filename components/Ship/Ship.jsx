import { Link } from 'react-router-dom'
import styles from './Ship.css'

const Ship = ({ship}) => {
  return (
    <div className={styles.shipCard}>
      <h2>{ship.name.toLowerCase()}</h2>
      <div className={styles.linkContainer}>  
        <Link to={`/ships/${ship.url.match(/\d+/)}`}><button>useParams</button></Link>
      </div>
    </div>
  )
}

export default Ship