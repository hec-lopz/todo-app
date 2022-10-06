import axios from "axios";

const API = process.env.REACT_APP_API_URL;

const instance = axios.create({
  baseURL: `${API}/tasks`,
});

const getTodos = async (token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const res = await instance.get("/", config);

    return res.data;
  } catch (error) {
    throw error;
  }
};
/** Create ToDo
 * @description create a new todo
 * @param {string} text
 */

const createTodo = async (text, token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const res = await instance.post(
      "/add",
      {
        text,
      },
      config
    );

    return res;
  } catch (error) {
    throw error;
  }
};

/** Edit ToDo
 * @param {string} id
 * @param {string} text
 */

const editTodo = async (id, text, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const res = await instance.put(`/${id}/edit`, { text }, config);

  return res;
};

/** Complete ToDo
 * @param {string} id
 * @param {boolean} checked
 */

const completeTodo = async (id, checked, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const res = await instance.put(`/${id}/edit`, { done: checked }, config);

  return res;
};

/** Delete ToDo
 * @param {string} id
 *
 *
 *
 * */

const deleteTodo = async (id, token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    await instance.delete(`/${id}/delete`, config);
  } catch (error) {
    throw error;
  }
};

/** Clear ToDos
 *
 *
 *
 * */

const clearTodos = async (token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    await instance.delete(`/delete`, config);
  } catch (error) {
    throw error;
  }
};

const todoService = {
  getTodos,
  editTodo,
  createTodo,
  completeTodo,
  deleteTodo,
  clearTodos,
};

export default todoService;
