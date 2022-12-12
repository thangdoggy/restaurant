import axios from "axios";

const USER_API_URL = "http://localhost/restaurant_server/api/auth/";
const MENU_API_URL = "http://localhost/restaurant_server/api/menu/";
const RESERVATION_API_URL =
  "http://localhost/restaurant_server/api/reservation/";

export const register = (userInfo) => {
  return axios.post(`${USER_API_URL}/register.php`, userInfo);
};

export const login = (user) => {
  return axios.post(`${USER_API_URL}/login.php`, user);
};

export const getMenu = (type) => {
  return axios.get(`${MENU_API_URL}/readMenu.php?type=${type}`);
};

export const reserveTable = (reserveInfo) => {
  return axios.post(
    `${RESERVATION_API_URL}/createReservation.php`,
    reserveInfo
  );
};
