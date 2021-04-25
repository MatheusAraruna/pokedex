import * as S from './styles'

import Search from 'components/Search'
import List from 'components/List'

export default function Filters() {
  return (
    <S.Container>
      <S.Logo src="/logo.png" alt="Imagem da logo, escrito pokedex" />
      <S.Heading>Filters</S.Heading>
      <S.Filters>
        <Search />
      </S.Filters>
      <List />
    </S.Container>
  )
}
