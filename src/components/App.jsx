import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import { GlobalStyle, Wrapper } from "../styles/GlobalStyle";
import { lightTheme, darkTheme } from "../styles/themes/styleVariables";

import CreateToDo from "./CreateToDo";
import Header from "./Header";
import ToDoList from "./ToDoList";
import ToDoItem from "./ToDoItem";
import Filter from "./Filter";

const TodoListItems = [
  {
    text: "Do something",
    checked: false,
  },
  {
    text: "Jog around the park 3x",
    checked: true,
  },
  {
    text: "Jog around the park 3x",
    checked: true,
  },
  {
    text: "Jog around the park 3x",
    checked: true,
  },
];

export const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = () => setDarkMode(!darkMode);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Wrapper>
        <GlobalStyle />
        <Header darkMode={darkMode} handleClick={handleClick} />
        <CreateToDo />
        <ToDoList>
          {TodoListItems.map((item) => (
            <ToDoItem text={item.text} key={item.text} checked={item.checked} />
          ))}
          <Filter />
        </ToDoList>
      </Wrapper>
    </ThemeProvider>
  );
};
