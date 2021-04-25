import styled from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
  position: relative;
  z-index: 1;
  width: 300px;
  height: 100vh;
  display: grid;
  grid-template-rows: repeat(3, minmax(0, auto)) 1fr;
  background: var(--white);
  -webkit-box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.3);
  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.3);
  ${media.lessThan('medium')`
    width: 100%;
    height: 400px;
  `}
`
export const Logo = styled.img`
  height: 50px;
  margin: 20px auto 10px;
`
export const Heading = styled.h1`
  margin: 10px 5% 0;
  font-size: var(--font-2xl);
  color: var(--gray-dark);
`
export const Filters = styled.nav`
  width: 90%;
  margin: 10px 5%;
`
