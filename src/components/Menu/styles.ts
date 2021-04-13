import styled from 'styled-components'

export const Container = styled.div`
  width: 300px;
  height: 100vh;
  -webkit-box-shadow: -4px 0px 5px -1px rgba(0, 0, 0, 0.33);
  -moz-box-shadow: -4px 0px 5px -1px rgba(0, 0, 0, 0.33);
  box-shadow: -4px 0px 5px -1px rgba(0, 0, 0, 0.33);
  display: grid;
  grid-template-rows: repeat(2, minmax(0, auto)) 1fr;
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
