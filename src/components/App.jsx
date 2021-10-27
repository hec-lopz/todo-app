import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "../styles/GlobalStyle";
import { lightTheme, darkTheme } from "../styles/themes/styleVariables";
import { Header } from "./Header";

export const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Header />
      <button onClick={() => setDarkMode(!darkMode)}>DarkMode</button>
    </ThemeProvider>
  );
};
