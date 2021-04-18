import { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
  :root{
    //colors app
    --black: #212121;
    --white: #ffffff;
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

    --huge: 1440px
    --large: 1170px
    --medium: 768px
    --small: 450px

  }

  * {
    margin: 0;
    padding: 0;
  }

  *,*::before, *::after{
    box-sizing: border-box;
  }

  html, body, #__next {
    height: 100%;
    background: var(--white);
  }

  body {
    font-family: -apple-system,BlinkMacSystemFont,segoe ui,roboto,oxygen,cantarell,helvetica neue,ubuntu,sans-serif;
  }

  html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
     margin: 0;
     padding: 0;
     border: 0;
     font-size: 62.5%;
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
  img{
    user-select: none;
  }
`
export default Global
