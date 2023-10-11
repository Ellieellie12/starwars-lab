import { Route, Routes } from 'react-router-dom'
import StarshipList from './components/StarshipList'
import Starship from './components/Starship'

import './App.css'

function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<StarshipList />} />
      <Route path="/ships/:shipId" element={<Starship />} />
    </Routes>
    </>
  )
}

export default App
