import { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
  :root{
    //colors app
    --black: #212121;
    --orange: #F2AE00;
    --gray-darkest:#303030;
    --gray-dark:#414141;
    --gray-medium:#C8C8C8;
    --gray-light:#EAEAEA;
    --separator:#E4E4E4;

    //colors types pokemon
    --normal: '#A8A77A';
    --fire: '#EE8130';
    --water: '#6390F0';
    --electric: '#F7D02C';
    --grass: '#7AC74C';
    --ice: '#96D9D6';
    --fighting: '#C22E28';
    --poison: '#A33EA1';
    --ground: '#E2BF65';
    --flying: '#A98FF3';
    --psychic: '#F95587';
    --bug: '#A6B91A';
    --rock: '#B6A136';
    --ghost: '#735797';
    --dragon: '#6F35FC';
    --dark: '#705746';
    --steel: '#B7B7CE';
    --fairy: '#D685AD';

    //fonts
    --font-xs: 0.625rem;
    --font-sm: 0.75rem;
    --font-md: 0.875rem;
    --font-lg: 1rem;
    --font-xl: 1.125rem;
    --font-2xl: 1.5rem;
    --font-3xl: 2rem;
    --font-4xl: 3rem;
    --font-5xl: 6rem;


  }
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
