import { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
  :root{}
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
    background: var(--white);
  }

  body {
    font-family: -apple-system,BlinkMacSystemFont,segoe ui,roboto,oxygen,cantarell,helvetica neue,ubuntu,sans-serif;
  }

  a{
    color:var(--highlight);
  }
  button{
    border:none;
  }
  button, input{
    outline:none;
  }
  li{
    list-style:none;
  }
`
export default Global
