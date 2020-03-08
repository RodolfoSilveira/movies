import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Abel&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Lato&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  *:focus {
    outline: 0;
  }
  html, body, #root {
    height: 100%;
  }
  body {
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font: 14px 'Abel', sans-serif;
  }
  p {
    font: 14px 'Lato', sans-serif;
  }
  a {
    text-decoration: none;
    color: #000;
  }
  ul {
    list-style: none;
  }
  button {
    cursor: pointer;
  }
`;
