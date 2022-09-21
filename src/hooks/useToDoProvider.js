import { useEffect, useState } from "react";
import { completeTodo, createTodo } from "../features/todos/todosService";
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
        setItems(data);
      })
      .catch((err) => {
        setItems([]);
        console.error(err.message);
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

  const createNewItem = async (text) => {
    try {
      const { data: res } = await createTodo(text);

      // setItems((prev) => [...prev, res.data]);
    } catch (error) {
      console.error(error.message);
    }
  };

  const completeItem = async (id, checked) => {
    try {
      await completeTodo(id, !checked);
    } catch (error) {
      console.error(err.message);
      setItems([]);
    }
  };

  const deleteItem = (id) => {
    fetch(`${API}/tasks/${id}/delete`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    })
      .then(() => updateData())
      .catch((err) => {
        updateData();
        console.error(err.message);
      });
  };

  const clearList = () => {
    fetch(`${API}/tasks/delete`, {
      method: "DELETE",
    })
      .then(() => updateData())
      .catch((err) => {
        updateData();
        console.error(err.message);
      });
  };

  const length = items.filter((item) => !item.done).length;

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
