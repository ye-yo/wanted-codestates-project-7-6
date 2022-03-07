import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  
  *, *::before, *::after {
    box-sizing: border-box;
  }

  #root{
    height :100%;
  }
  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    color:#5B5555;
    font-size: 14px;
  }

  button,a{
    cursor: pointer;
  }
`;

export default GlobalStyle;
