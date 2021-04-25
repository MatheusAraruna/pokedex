import styled from 'styled-components'
import media from 'styled-media-query'

import Filters from 'templates/Filters'
import Pokemon from 'templates/Pokemon'

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: minmax(0, 300px) 1fr;
  ${media.lessThan('medium')`
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, minmax(0, auto));
  `}
`

export default function Home() {
  return (
    <Container>
      <Filters />
      <Pokemon />
    </Container>
  )
}
