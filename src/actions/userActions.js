import axios from "axios";

const USER_API_URL = "http://localhost/restaurant_server/api/auth/";
const MAIN_API_URL = "http://localhost/restaurant_server/api/menu/";

export const register = (userInfo) => {
  return axios.post(`${USER_API_URL}/register.php`, userInfo);
};

export const login = (user) => {
  return axios.post(`${USER_API_URL}/login.php`, user);
};

export const getMainDishes = () => {
  return axios.get(`${MAIN_API_URL}/main_dishes_read.php`);
};

export const getStarters = () => {
  return axios.get(`${MAIN_API_URL}/starters_read.php`);
};

export const getDesserts = () => {
  return axios.get(`${MAIN_API_URL}/desserts_read.php`);
};

export const getDrinks = () => {
  return axios.get(`${MAIN_API_URL}/drinks_read.php`);
};
