import styled, { createGlobalStyle } from "styled-components";

export const Wrapper = styled.div`
  min-width: 30rem;
  max-width: 54rem;
  width: ${() => `${(324 / 375) * 100}%`};
  margin: 0 auto;
  margin-top: 50px;
`;

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  input, body, li, ul{
    margin: 0;
    padding: 0;
  }
  ul {
    list-style: none;
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

    @media screen and (min-width: 375px) {
      background-image: ${(props) => props.theme.background.desktopImage}
    }
    @media screen and (min-width: 600px) {
      font-size:1.8rem;

    }

  }

  *, *::before, *::after {
    transition-property: color, background, background-image;
    transition-duration: 150ms;
    transition-timing-function: ease-out;
  }
`;
