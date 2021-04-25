import { CSSProperties } from 'react'
import { useQuery } from 'react-query'

import { usePokeContext } from 'providers/ContextProvider'

import PokeAPI from 'pokeapi-typescript'

import { AutoSizer } from 'react-virtualized'
import { FixedSizeList as ListItems } from 'react-window'
import * as S from './styles'

import Item, { ItemData } from 'components/Item'

interface RendererProps {
  index: number
  style: CSSProperties
  data: ItemData[]
}

const getListPokemons = () => {
  return PokeAPI.Pokemon.list(890, 0)
    .then((res) => {
      return res.results.map((poke, i) => ({
        id: i + 1,
        name: poke.name,
        url: poke.url,
      }))
    })
    .catch((err) => {
      throw new err(err)
    })
}

export default function List() {
  const { data, isLoading, isError } = useQuery('list', getListPokemons)
  const { pokemon, getPokemon } = usePokeContext()

  const rendererItems = ({ index, style, data }: RendererProps) => {
    return (
      <div style={style} onClick={() => getPokemon(data[index]?.name)}>
        <Item
          item={data[index]}
          active={pokemon?.id === data[index].id && true}
        />
      </div>
    )
  }

  return (
    <S.List>
      {isLoading && <div>loading...</div>}
      {isError && <div>error...</div>}
      {data && (
        <AutoSizer>
          {({ width, height }) => (
            <ListItems
              height={height}
              width={width}
              itemSize={60}
              itemData={data}
              itemCount={data.length}
            >
              {rendererItems}
            </ListItems>
          )}
        </AutoSizer>
      )}
    </S.List>
  )
}
