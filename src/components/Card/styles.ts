import styled from 'styled-components'
import media from 'styled-media-query'

interface PropStyle {
  colorType: string[]
}

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  ${media.lessThan('medium')`
    padding: 50px 0;
  `}
`

export const Card = styled.div<PropStyle>`
  position: relative;
  max-width: 600px;
  max-height: 700px;
  width: 90%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  span {
    font-size: var(--font-5xl);
    font-weight: 800;
    text-transform: uppercase;
    background: ${({ colorType }) =>
      colorType.length === 1 &&
      `linear-gradient(to bottom, ${colorType[0]} 0%, ${colorType[0]} 100%)`};
    background: ${({ colorType }) =>
      colorType.length === 2 &&
      `linear-gradient(to bottom, ${colorType[0]} 0%, ${colorType[1]} 100%)`};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    padding: 0 20px;
    text-align: center;
  }
  ${media.lessThan('medium')`
    span{
      font-size: var(--font-4xl);
    }
  `}
`

export const Header = styled.header`
  width: 100%;
`

export const Main = styled.main`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  img {
    height: 100%;
    max-width: 500px;
    max-height: 500px;
  }
  ${media.lessThan('large')`
    img {
      width: 100%;
      height: auto;
    }
  `}
`
export const Tags = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  div {
    margin: 5px 10px;
  }
`

export const Footer = styled.footer`
  text-align: center;
`

export const Background = styled.div`
  position: absolute;
  z-index: -1;
  top: 50%;
  left: 50%;
  font-size: 25vw;
  transform: translate(-50%, -50%);
  font-weight: bold;
  color: var(--gray-light);
  user-select: none;
  ${media.lessThan('large')`
    font-size: 30vh;
  `}
  ${media.lessThan('medium')`
    font-size: 20vh;
  `}
`

// background: linear-gradient(to bottom, #7ac74c 0%, #96d9d6 100%);
// background-clip: text;
// -webkit-background-clip: text;
// -webkit-text-fill-color: transparent;
