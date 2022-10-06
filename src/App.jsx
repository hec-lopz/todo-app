import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { GlobalStyle, Wrapper, lightTheme, darkTheme } from "./styles";

import { Dashboard, SignUpForm, SignInForm } from "./pages";

export const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = () => setDarkMode(!darkMode);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Wrapper>
        <GlobalStyle />

        <ToastContainer autoClose={1000} />
        <Router>
          <Dashboard handleClick={handleClick} />
          <Routes>
            <Route path="/" element={null} />
            <Route path="/login" element={<SignInForm />} />
            <Route path="/register" element={<SignUpForm />} />
          </Routes>
        </Router>
      </Wrapper>
    </ThemeProvider>
  );
};
