import styled from 'styled-components'

import Main from 'screens/Main'

const Container = styled.div`
  width: 100%;
  height: 100vh;
`

export default function Home() {
  return (
    <Container>
      <Main />
    </Container>
  )
}
