import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import { GlobalStyle, Wrapper } from "../styles/GlobalStyle";
import { lightTheme, darkTheme } from "../styles/themes/styleVariables";

import CreateToDo from "./CreateToDo";
import Header from "./Header";
import ToDoList from "./ToDoList";
import Filter from "./Filter";
import ToDoProvider from "./ToDoContext";

export const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = () => setDarkMode(!darkMode);

  return (
    <ToDoProvider>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <Wrapper>
          <GlobalStyle />
          <Header darkMode={darkMode} handleClick={handleClick} />
          <CreateToDo />
          <ToDoList>
            <Filter />
          </ToDoList>
        </Wrapper>
      </ThemeProvider>
    </ToDoProvider>
  );
};
