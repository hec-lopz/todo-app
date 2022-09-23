import { useEffect, useReducer, useState } from "react";
import {
  clearTodos,
  completeTodo,
  createTodo,
  deleteTodo,
  getTodos,
} from "../features/todos/todosService";
// import { useLocalStorage } from "../hooks/useLocalStorage";

const FILTERS = {
  ALL: "all",
  ACTIVE: "active",
  COMPLETED: "completed",
};
const ACTIONS = {
  CREATE: "create",
  READ: "read",
  EDIT: "edit",
  DELETE: "delete",
  DELETE_ALL: "delete_all",
};

// export const ToDoContext = createContext();
const todosReducer = (state, action) => {
  const { payload } = action;
  switch (action.type) {
    case ACTIONS.CREATE:
      console.log("create");
      return [...state, action.payload];
    case ACTIONS.READ:
      return [...action.payload];
    case ACTIONS.EDIT:
      const task = state.find((item) => item._id === payload.id);
      task.done = !task.done;
      return [...state];
    case ACTIONS.DELETE:
      const tasks = state.filter((item) => item._id !== payload.id);
      return tasks;
    case ACTIONS.DELETE_ALL:
      return [];
    default:
      break;
  }
};
export const useToDoProvider = () => {
  // const [items, setItems] = useLocalStorage("TODOS", []);
  const [tasks, dispatch] = useReducer(todosReducer, []);
  const [filterOption, setFilterOption] = useState(FILTERS.ALL);

  useEffect(() => {
    getTodos()
      .then((data) => dispatch({ type: ACTIONS.READ, payload: data }))
      .catch((err) => {
        console.error(err);
        dispatch({ type: ACTIONS.READ, payload: [] });
      });
  }, []);

  let filteredTasks = [];
  switch (filterOption) {
    case FILTERS.ALL:
      filteredTasks = [...tasks];
      break;
    case FILTERS.ACTIVE:
      filteredTasks = tasks.filter((item) => !item.done);
      break;
    case FILTERS.COMPLETED:
      filteredTasks = tasks.filter((item) => item.done);
      break;
    default:
      break;
  }

  const createNewItem = async (text) => {
    try {
      const { data: res } = await createTodo(text);

      dispatch({ type: ACTIONS.CREATE, payload: res.data });
    } catch (error) {
      console.log(error);
      if (error.response.status === 401) {
        let id = tasks.length !== 0 ? tasks.at(-1).id + 1 : 1;
        const task = {
          _id: id,
          text: text,
          done: false,
        };

        dispatch({ type: ACTIONS.CREATE, payload: task });
      }
    }
  };

  const completeItem = async (id, checked) => {
    try {
      dispatch({ type: ACTIONS.EDIT, payload: { id } });
      await completeTodo(id, !checked);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteItem = async (id) => {
    try {
      dispatch({ type: ACTIONS.DELETE, payload: { id } });
      await deleteTodo(id);
    } catch (error) {
      console.error(error.message);
    }
  };

  const clearList = async () => {
    try {
      dispatch({ type: ACTIONS.DELETE_ALL });
      await clearTodos();
    } catch (error) {
      console.error(error.message);
    }
  };

  const length = tasks.filter((item) => !item.done).length;

  return {
    createNewItem,
    deleteItem,
    completeItem,
    length,
    filteredTasks,
    setFilterOption,
    filterOption,
    clearList,
  };
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
