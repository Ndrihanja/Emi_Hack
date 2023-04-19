import axios from "axios";
import environement from "../env";
export const authicate = (credentials) => {
  return axios.post(`${environement.apiURL}api/login`, credentials, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
};
export const register = (credentials) => {
  return axios.post(`${environement.apiURL}/auth/register`, credentials, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
};

export const getUserProfile = () => {
  return axios.get(`${environement.apiURL}/auth/profile`, {
    headers: {
      Accept: "application/json",
      Authorization: "Bearer " + localStorage.getItem("access_token"),
    },
  });
};
