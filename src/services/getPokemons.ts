import PokeAPI from 'pokeapi-typescript'

const getPokemons = () => {
  return PokeAPI.Pokemon.listAll()
    .then((res) => console.log(res))
    .catch((err) => err)
}
export default getPokemons
