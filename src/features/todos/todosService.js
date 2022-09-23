import axios from "axios";

const API = process.env.REACT_APP_API_URL;

const instance = axios.create({
  baseURL: API,
});

export const getTodos = async () => {
  try {
    const res = await instance.get("/tasks");
    return res.data;
  } catch (error) {
    throw error;
  }
};
/** Create ToDo
 * @description create a new todo
 * @param {string} text
 */
export const createTodo = async (text) => {
  try {
    const res = await instance.post("/tasks/add", {
      text,
    });

    debugger;
    return res;
  } catch (error) {
    throw error;
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

/** Delete ToDo
 * @param {string} id
 *
 *
 *
 * */
export const deleteTodo = async (id) => {
  try {
    await instance.delete(`/tasks/${id}/delete`);
  } catch (error) {
    throw error;
  }
};

/** Clear ToDos
 *
 *
 *
 * */
export const clearTodos = async () => {
  try {
    await instance.delete(`/tasks/delete`);
  } catch (error) {
    throw error;
  }
};
