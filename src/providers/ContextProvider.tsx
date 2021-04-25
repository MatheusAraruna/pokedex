import React from 'react'
import PokeAPI from 'pokeapi-typescript'

interface Pokemon {
  id: number | string
  name: string
  types: string[]
}
interface ContextType {
  pokemon: Pokemon | null
  isLoading: boolean
  isError: string | null
  getPokemon(name: string): void
}

const PokeContext = React.createContext<ContextType>({} as ContextType)
export const usePokeContext = () => React.useContext(PokeContext)

const ContextProvider: React.FC = ({ children }) => {
  const [pokemon, setPokemon] = React.useState<Pokemon | null>(null)
  const [isLoading, setIsLoading] = React.useState<boolean>(true)
  const [isError, setIsError] = React.useState<string | null>(null)

  const getPokemon = (name = 'bulbasaur') => {
    setIsLoading(true)
    PokeAPI.Pokemon.resolve(name)
      .then((result) => {
        console.log(result)
        setPokemon({
          id: result.id,
          name: result.name,
          types: result.types.map((item) => item.type.name),
        })
        setIsLoading(false)
      })
      .catch((err) => setIsError(err))
  }

  React.useEffect(() => {
    getPokemon()
  }, [])

  return (
    <PokeContext.Provider value={{ pokemon, isLoading, isError, getPokemon }}>
      {children}
    </PokeContext.Provider>
  )
}
export default ContextProvider
