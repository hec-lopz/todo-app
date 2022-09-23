import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import { GlobalStyle, Wrapper, lightTheme, darkTheme } from "./styles";

import {
  CreateToDo,
  Header,
  ToDoList,
  Filter,
  ToDoItem,
  Authentication,
} from "./components";

import { useToDoProvider } from "./hooks";

export const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const {
    createNewItem,
    deleteItem,
    completeItem,
    length,
    filteredTasks,
    setFilterOption,
    filterOption,
    clearList,
  } = useToDoProvider();

  const handleClick = () => setDarkMode(!darkMode);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Wrapper>
        <GlobalStyle />
        <Authentication />
        <Header darkMode={darkMode} handleClick={handleClick} />
        <CreateToDo state={{ createNewItem }} />
        <ToDoList>
          {filteredTasks.map((item) => (
            <ToDoItem
              text={item.text}
              id={item._id}
              key={item._id}
              checked={item.done}
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
