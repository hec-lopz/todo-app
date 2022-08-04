import { useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const FILTERS = {
  ALL: "all",
  ACTIVE: "active",
  COMPLETED: "completed",
};

const API = process.env.REACT_APP_API_URL;

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

  const updateData = () => {
    fetch(`${API}/tasks`)
      .then((res) => res.json())
      .then((data) => {
        saveData(data);
      });
  };
  const createNewItem = (text) => {
    fetch(`${API}/tasks/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    })
      .then((res) => res.json())
      .then((json) => {
        saveData([...items, json.data]);
      });
  };

  const completeItem = (id, checked) => {
    fetch(`${API}/tasks/${id}/edit`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ done: !checked }),
    }).then(() => updateData());
  };

  const deleteItem = (id) => {
    fetch(`${API}/tasks/${id}/delete`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    }).then(() => updateData());
  };

  const clearList = () => {
    fetch(`${API}/tasks/delete`, {
      method: "DELETE",
    }).then(() => updateData());
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
