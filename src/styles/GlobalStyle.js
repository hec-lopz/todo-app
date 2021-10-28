import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  input, body{
    margin: 0;
    padding: 0;
  }

  input, ul, li{
    font-family: inherit;
    font-size: inherit;
    color: inherit;

  }
    
  body {
    font-family: ${(props) => props.theme.fontFamily};
    font-size: 1.2rem;
    color: ${(props) => props.theme.fontColors.primary};
    background-color: ${(props) => props.theme.background.color};
    position: relative;
    background-image: ${(props) => props.theme.background.mobileImage};
    background-position: top;
    background-repeat: no-repeat;
    background-attachment: fixed;

    ${
      "" /* transition-property: background-color, background-image, color;
    transition-duration: 250ms;
    transition-timing-function: ease-in-out; */
    }
  }

  *, *::before, *::after {
    transition: all 250ms ease;
  }
`;
