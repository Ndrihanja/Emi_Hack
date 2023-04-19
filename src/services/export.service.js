import axios from "axios";
import environement from "../env";

const header = () => {
  const user_token = localStorage.getItem("user_token")
    ? localStorage.getItem("user_token")
    : "";
  const config = {
    headers: {
      Authorization: `Bearer ${user_token}`,
      "Content-Type": "multipart/form-data",
    },
  };
  return config;
};

class Exportation {
  export() {
    return axios.get(`${environement.apiURL}api/export-point-vente`, header());
  }
}

export default new Exportation();
