import { useEffect, useState } from "react";
// import { useLocalStorage } from "../hooks/useLocalStorage";

const FILTERS = {
  ALL: "all",
  ACTIVE: "active",
  COMPLETED: "completed",
};

const API = process.env.REACT_APP_API_URL;

// export const ToDoContext = createContext();
export const useToDoProvider = () => {
  // const [items, setItems] = useLocalStorage("TODOS", []);
  const [items, setItems] = useState([]);
  const [filterOption, setFilterOption] = useState(FILTERS.ALL);
  const [filteredItems, setFilteredItems] = useState([]);

  /* let filteredItems = [];
  switch (true) {
    case filterOption === FILTERS.ALL:
      filteredItems = [...items];
      break;
    case filterOption === FILTERS.ACTIVE:
      filteredItems = items.filter((item) => !item.checked);
      break;
    case filterOption === FILTERS.COMPLETED:
      filteredItems = items.filter((item) => item.checked);
      break;
    default:
      break;
  } */

  const updateData = () => {
    fetch(`${API}/tasks`)
      .then((res) => res.json())
      .then((data) => {
        if (/^4/.test(data.statusCode)) throw new Error(data.message);
        setItems(data);
      })
      .catch((err) => {
        console.error(err);
        setItems([]);
      });
  };
  useEffect(() => {
    updateData();
  }, []);
  useEffect(() => {
    switch (true) {
      case filterOption === FILTERS.ALL:
        setFilteredItems([...items]);
        // filteredItems = [...items];
        break;
      case filterOption === FILTERS.ACTIVE:
        setFilteredItems(items.filter((item) => !item.done));
        // filteredItems = items.filter((item) => !item.checked);
        break;
      case filterOption === FILTERS.COMPLETED:
        setFilteredItems(items.filter((item) => item.done));
        // filteredItems = items.filter((item) => item.checked);
        break;
      default:
        break;
    }
  }, [filterOption, items]);

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
        debugger;
        if (/^4/.test(json.statusCode)) throw new Error(json.message);
        setItems([...items, json.data]);
      })
      .catch((err) => {
        console.error(err);
        setItems([]);
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

  const length = items || items.filter((item) => !item.done).length;

  return [
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
