import { useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const FILTERS = {
  ALL: "all",
  ACTIVE: "active",
  COMPLETED: "completed",
};

// export const ToDoContext = createContext();

export const useToDoProvider = () => {
  const [items, saveData] = useLocalStorage("TODOS", []);
  const [filterOption, setFilterOption] = useState(FILTERS.ALL);

  let filteredItems = [];
  // const filterItems = () => {}

  if (filterOption === FILTERS.ALL) {
    filteredItems = [...items];
  } else if (filterOption === FILTERS.ACTIVE) {
    filteredItems = items.filter((item) => !item.checked);
  } else if (filterOption === FILTERS.COMPLETED) {
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

  return [
    items,
    createNewItem,
    deleteItem,
    completeItem,
    length,
    filteredItems,
    setFilterOption,
    filterOption,
    clearList,
  ];
  // return (
  //   <ToDoContext.Provider
  //     value={{
  //       items,
  //       createNewItem,
  //       deleteItem,
  //       completeItem,
  //       length,
  //       filteredItems,
  //       setFilterOption,
  //       filterOption,
  //       clearList,
  //     }}
  //   >
  //     {children}
  //   </ToDoContext.Provider>
  // );
};

export default useToDoProvider;
