import styled from 'styled-components'

interface StyleProps {
  active: boolean
}

export const Section = styled.section`
  display: block;
  width: 100%;
  height: auto;
  border-bottom: 2px solid var(--separator);
`

export const Header = styled.header`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  color: var(--gray-dark);
  background: var(--white);
  cursor: pointer;
  h1 {
    font-size: var(--font-2xl);
  }
  svg {
    font-size: var(--font-4xl);
  }
`
export const Main = styled.main<StyleProps>`
  padding: 10px;
  display: ${({ active }) => (active ? 'block' : 'none')};
`
