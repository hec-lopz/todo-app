import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { GlobalStyle, Wrapper, lightTheme, darkTheme } from "./styles";

import { Authentication } from "./components";
import { Dashboard } from "./pages/Dashboard";

import { useModal } from "./hooks";

export const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const { onOpen, ...state } = useModal();

  const handleClick = () => setDarkMode(!darkMode);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Wrapper>
        <GlobalStyle />
        <ToastContainer autoClose={1000} />
        <Authentication {...state} />
        <Dashboard
          darkMode={darkMode}
          handleClick={handleClick}
          onOpen={onOpen}
        />
      </Wrapper>
    </ThemeProvider>
  );
};
