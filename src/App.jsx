import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { GlobalStyle, Wrapper, lightTheme, darkTheme } from "./styles";

import { Authentication } from "./components";

import { useModal } from "./hooks";

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

  const { onOpen, ...state } = useModal();

  const handleClick = () => setDarkMode(!darkMode);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Wrapper>
        <GlobalStyle />
        <ToastContainer autoClose={1000} />
        <Authentication {...state} />
        <Header darkMode={darkMode} handleClick={handleClick} onOpen={onOpen} />
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
