import PokeAPI from 'pokeapi-typescript'

const getTypes = () => {
  return PokeAPI.Type.listAll()
    .then((res) => console.log(res))
    .catch((err) => err)
}
export default getTypes
