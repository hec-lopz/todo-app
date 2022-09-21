import axios from "axios";

const API = process.env.REACT_APP_API_URL;

const instance = axios.create({
  baseURL: API,
});

/** Create ToDo
 * @description create a new todo
 * @param {string} text
 */
export const createTodo = async (text) => {
  try {
    const res = await instance.post("/tasks/add", {
      text,
    });

    return res;
  } catch (error) {
    throw new Error(error);
  }
};

/** Complete ToDo
 * @param {string} id
 * @param {boolean} checked
 */
export const completeTodo = async (id, checked) => {
  const res = await instance.put(`/tasks/${id}/edit`, { done: checked });
  return res;
};

export const deleteTodo = async () => {
  throw new Error("Not implemented");
};

export const clearTodos = async () => {
  throw new Error("Not implemented");
};
