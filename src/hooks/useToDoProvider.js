import { useEffect, useReducer, useState } from "react";

import todoService from "../features/todos/todosService";
import { toast } from "react-toastify";

import { useSelector } from "react-redux";

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
  COMPLETE: "complete",
  DELETE: "delete",
  DELETE_ALL: "delete_all",
};

// export const ToDoContext = createContext();
const todosReducer = (state, action) => {
  const { payload } = action;
  switch (action.type) {
    case ACTIONS.CREATE:
      return [...state, action.payload];
    case ACTIONS.READ:
      return [...action.payload];
    case ACTIONS.COMPLETE:
      const taskIndex = state.findIndex((item) => item._id === payload.id);
      const newState = [...state];
      newState[taskIndex].done = !payload.done;
      return newState;
    case ACTIONS.DELETE:
      const tasks = state.filter((item) => item._id !== payload.id);
      return tasks;
    case ACTIONS.DELETE_ALL:
      return [];
    default:

      throw new Error("Action type not valid");

  }
};
export const useToDoProvider = () => {
  // const [items, setItems] = useLocalStorage("TODOS", []);
  const [tasks, dispatch] = useReducer(todosReducer, []);
  const [filterOption, setFilterOption] = useState(FILTERS.ALL);


  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch({ type: ACTIONS.DELETE_ALL });
    if (!user) {
      toast.info("Login to save your list", { autoClose: 2000 });
      return;
    }
    todoService
      .getTodos(user.token)

      .then((data) => dispatch({ type: ACTIONS.READ, payload: data }))
      .catch((err) => {
        console.error(err);
        dispatch({ type: ACTIONS.READ, payload: [] });
      });

  }, [user]);


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
    if (!user) {
      let id = tasks.length !== 0 ? tasks.at(-1)._id + 1 : 1;
      const task = {
        _id: id,
        text: text,
        done: false,
      };
      dispatch({ type: ACTIONS.CREATE, payload: task });
      return;
    }
    try {
      const { data: res } = await todoService.createTodo(text, user.token);

      dispatch({ type: ACTIONS.CREATE, payload: res.data });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const completeItem = async (id, checked) => {
    if (user) {
      try {
        await todoService.completeTodo(id, !checked, user.token);
      } catch (error) {
        console.error(error);
      }
    }
    dispatch({ type: ACTIONS.COMPLETE, payload: { id, done: checked } });
  };

  const deleteItem = async (id) => {
    if (user) {
      try {
        await todoService.deleteTodo(id, user.token);
      } catch (error) {
        console.error(error.message);
      }
    }
    dispatch({ type: ACTIONS.DELETE, payload: { id } });
  };

  const clearList = async () => {
    if (user) {
      try {
        await todoService.clearTodos(user.token);
      } catch (error) {
        console.error(error.message);
      }
    }
    dispatch({ type: ACTIONS.DELETE_ALL });

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
