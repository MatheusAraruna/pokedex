import styled from 'styled-components'
import media from 'styled-media-query'

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
  user-select: none;
  strong {
    color: white;
    font-size: var(--font-xl);
    text-transform: uppercase;
  }
  ${media.lessThan('medium')`
    width: 80px;
    height: 20px;
    strong {
        font-size: var(--font-lg)
    }
  `}
`
