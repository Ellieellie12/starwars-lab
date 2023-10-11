const baseUrl = 'https://swapi.dev/api'

export async function getAllStarships() {
  const res = await fetch(`${baseUrl}/starships`)
  return res.json()
}

export async function getStarshipDetails(shipId) {
  const res = await fetch(`${baseUrl}/starships/${shipId}`)
  return res.json()
}




















// export async function getShipData(shipId) {
//   try {
//     const res = await fetch(`${BASE_URL}/${shipId}`)
//     return res.json()
//   } catch (err) {
//     console.log(err)
//   }
// }