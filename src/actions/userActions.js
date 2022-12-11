import axios from "axios";

const USER_API_URL = "http://localhost/restaurant_server/api/auth/";

export const register = (userInfo) => {
  return axios.post(`${USER_API_URL}/register.php`, userInfo);
};

export const login = (user) => {
  return axios.post(`${USER_API_URL}/login.php`, user);
};
