import styled from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr minmax(0, 300px);
  overflow: auto;
  ${media.lessThan('large')`
    grid-template-columns: 1fr;
    grid-template-rows: minmax(800px, 1fr) minmax(0, auto);
  `}
  ${media.lessThan('medium')`
    height: auto;
    grid-template-rows: minmax(auto, 1fr) minmax(0, auto);

  `}
`
