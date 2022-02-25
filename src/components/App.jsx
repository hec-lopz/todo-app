import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import { GlobalStyle, Wrapper } from "../styles/GlobalStyle";
import { lightTheme, darkTheme } from "../styles/themes/styleVariables";

import CreateToDo from "./CreateToDo";
import Header from "./Header";
import ToDoList from "./ToDoList";
import Filter from "./Filter";
import ToDoItem from "./ToDoItem";
import useToDoProvider from "./ToDoContext";

export const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const [
    items,
    createNewItem,
    deleteItem,
    completeItem,
    length,
    filteredItems,
    setFilterOption,
    filterOption,
    clearList,
  ] = useToDoProvider();

  const handleClick = () => setDarkMode(!darkMode);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Wrapper>
        <GlobalStyle />
        <Header darkMode={darkMode} handleClick={handleClick} />
        <CreateToDo state={{ createNewItem }} />
        <ToDoList>
          {filteredItems.map((item) => (
            <ToDoItem
              text={item.text}
              key={item.text}
              checked={item.checked}
              state={{ deleteItem, completeItem }}
            />
          ))}
          <Filter
            state={{ length, setFilterOption, filterOption, clearList }}
          />
        </ToDoList>
      </Wrapper>
    </ThemeProvider>
  );
};
