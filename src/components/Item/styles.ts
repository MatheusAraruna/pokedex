import styled from 'styled-components'

interface StyleProps {
  active: boolean
}

export const Item = styled.div<StyleProps>`
  width: 95%;
  height: 95%;
  margin: 2.5%;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  overflow: hidden;
  border-radius: 2px;
  background: var(${({ active }) => (active ? '--orange' : '--gray-light')});
  color: var(${({ active }) => (active ? '--white' : '--gray-dark')});
  img {
    width: 55px;
    height: 100%;
  }
  span,
  h1 {
    font-size: var(--font-xl);
    text-transform: uppercase;
    font-weight: bold;
  }
  span {
    width: 60px;
  }
  h1 {
    width: 110px;
  }
  &:hover {
    background: var(--gray-medium);
  }
`
