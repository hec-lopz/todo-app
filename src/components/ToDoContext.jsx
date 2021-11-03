import React, { createContext, useState } from "react";
import { useLocalStorage } from "../utils/useLocalStorage";

export const ToDoContext = createContext();

const ToDoProvider = ({ children }) => {
  const [items, saveData] = useLocalStorage("TODOS", []);
  const [filterOption, setFilterOption] = useState("all");

  let filteredItems = [];
  // const filterItems = () => {}

  if (filterOption === "all") {
    filteredItems = [...items];
  } else if (filterOption === "active") {
    filteredItems = items.filter((item) => !item.checked);
  } else if (filterOption === "completed") {
    filteredItems = items.filter((item) => item.checked);
  }

  const createNewItem = (text) => {
    const newItem = {
      text: text,
      checked: false,
    };
    saveData([...items, newItem]);
  };

  const completeItem = (text) => {
    const index = items.findIndex((item) => item.text === text);
    const newData = [...items];
    newData[index].checked = !newData[index].checked;
    saveData(newData);
  };

  const deleteItem = (text) => {
    const itemIndex = items.findIndex((item) => item.text === text);
    const newData = [...items];
    newData.splice(itemIndex, 1);
    saveData(newData);
  };

  const clearList = () => {
    saveData([]);
  };

  const length = items.filter((item) => !item.checked).length;

  return (
    <ToDoContext.Provider
      value={{
        items,
        createNewItem,
        deleteItem,
        completeItem,
        length,
        filteredItems,
        setFilterOption,
        filterOption,
        clearList,
      }}
    >
      {children}
    </ToDoContext.Provider>
  );
};

export default ToDoProvider;
