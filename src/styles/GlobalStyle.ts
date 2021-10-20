import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}
  * {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  html, body {
    position: relative;
    overflow-x: hidden;
    width: 100%;
    font-family: "Roboto", sans-serif;
    color: #374151;
    font-size: 16px;
  }

  html {
    scroll-behavior: smooth;
  }
  
  small {
    display: block;
    margin: -5px 0 10px;
    color: red;
  }

  input,
  textarea {
    padding: 10px 16px;
    border-radius: 8px;
    border: 1px solid #b3b3b3;
    margin: 10px 0;
    
    &.error {
      border-color: red;
    }
  }
  
  button {
    padding: 14px 16px;
    border-radius: 8px;
    margin: 30px 0 10px;
    border: 0;
    cursor: pointer;
  }


`;
export default GlobalStyle;
