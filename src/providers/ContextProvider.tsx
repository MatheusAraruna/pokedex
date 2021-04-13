import React from 'react'
import PokeAPI from 'pokeapi-typescript'

interface Pokemon {
  name: string
}
interface List {
  list: Pokemon[] | null
}
interface ContextType {
  data: List | null
}

const PokeContext = React.createContext<ContextType>({} as ContextType)
export const usePokeContext = () => React.useContext(PokeContext)

const ContextProvider: React.FC = ({ children }) => {
  const [data, setData] = React.useState<List | null>(null)

  const getData = () => {
    PokeAPI.Pokemon.resolve('pikachu').then((result) => console.log(result))
    setData({ list: [{ name: 'string' }] })
  }

  React.useEffect(() => {
    getData()
  }, [])
  return (
    <PokeContext.Provider value={{ data }}>{children}</PokeContext.Provider>
  )
}
export default ContextProvider
