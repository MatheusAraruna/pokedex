import { usePokeContext } from 'providers/ContextProvider'

import getColorType from 'utils/getColorType'
import formatNumber from 'utils/formatNumber'

import * as S from './styles'
import Tag from 'components/Tag'

export default function Card() {
  const { pokemon, isError, isLoading } = usePokeContext()

  if (isLoading) {
    return <S.Container>Loading...</S.Container>
  }
  if (isError) {
    return <S.Container>{isError}</S.Container>
  }

  return (
    <S.Container>
      {pokemon && (
        <S.Card colorType={pokemon.types.map((item) => getColorType(item))}>
          <S.Background>{formatNumber(pokemon?.id)}</S.Background>
          <S.Header>
            <span>Nº {formatNumber(pokemon?.id)} </span>
          </S.Header>
          <S.Main>
            <img
              src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon?.id}.png`}
              alt="pokemon"
            />
            <S.Tags>
              {pokemon.types.map((item, i) => (
                <Tag key={i} color={getColorType(item)}>
                  {item}
                </Tag>
              ))}
            </S.Tags>
          </S.Main>
          <S.Footer>
            <span>{pokemon?.name}</span>
          </S.Footer>
        </S.Card>
      )}
      {isError && <S.Container>Error</S.Container>}
    </S.Container>
  )
}
