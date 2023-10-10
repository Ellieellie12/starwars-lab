const  BASE_URL= 'https://swapi.dev/api/starships'

export async function getAllStarShips() {
  try {
    const res = await fetch(`${BASE_URL}/starships/`)
    return res.json()
  } catch (err) {
    console.log(err)
  }
}

// export async function getShipData(shipId) {
//   try {
//     const res = await fetch(`${BASE_URL}/${shipId}`)
//     return res.json()
//   } catch (err) {
//     console.log(err)
//   }
// }