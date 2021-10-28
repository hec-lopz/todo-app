import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "../styles/GlobalStyle";
import { lightTheme, darkTheme } from "../styles/themes/styleVariables";

import CreateToDo from "./CreateToDo";
import Header from "./Header";
import ToDoList from "./ToDoList";
import ToDoItem from "./ToDoItem";
import Filter from "./Filter";

export const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = () => setDarkMode(!darkMode);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Header darkMode={darkMode} handleClick={handleClick} />
      <CreateToDo />
      <ToDoList>
        <ToDoItem />
      </ToDoList>
      <Filter />
    </ThemeProvider>
  );
};
