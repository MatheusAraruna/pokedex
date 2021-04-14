import styled from 'styled-components'

interface StyleProps {
  color: string
}

export const Tag = styled.div<StyleProps>`
  background: ${({ color }) => `${color}`};
  width: 100px;
  height: 25px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  strong {
    color: white;
    font-size: var(--font-xl);
    text-transform: uppercase;
  }
`
