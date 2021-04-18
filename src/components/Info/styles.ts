import styled from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
  position: relative;
  z-index: 0;
  display: flex;
  flex-direction: column;
  min-width: 300px;
  height: 100vh;
  -webkit-box-shadow: -2px 0px 4px 0px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: -2px 0px 4px 0px rgba(0, 0, 0, 0.3);
  box-shadow: -2px 0px 4px 0px rgba(0, 0, 0, 0.3);
  background: var(--white);
  ${media.lessThan('large')`
    height: auto;
  `}
`
