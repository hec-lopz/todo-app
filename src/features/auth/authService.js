import axios from "axios";

const API = process.env.REACT_APP_API_URL;

const axiosInstance = axios.create({
  baseURL: `${API}/users`,
});

/**
 * @typedef {Object} resData
 * @property {string} message
 * @property {string} _id
 * @property {string} name
 * @property {string} email
 * @property {string} token
 */

/** Register user
 *  @param {Object} userData
 *  @param {string} userData.name
 *  @param {string} userData.email
 *  @param {string} userData.password
 *  @returns {Promise<resData>} resData - {@link resData}
 * */
const register = async (userData) => {
  const res = await axiosInstance.post("/", userData);
  const { message, ...data } = res.data;

  if (res.data) {
    localStorage.setItem("user", JSON.stringify(data));
  }

  return data;
};

/** Login user
 * @param {Object} userData
 * @param {string} userData.email
 * @param {string} userData.password
 * @returns {Promise<resData>} data
 */

const login = async (userData) => {
  const res = await axiosInstance.post("/login", userData);
  const { message, ...data } = res.data;

  if (res.data) {
    localStorage.setItem("user", JSON.stringify(data));
  }

  return data;
};

const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
