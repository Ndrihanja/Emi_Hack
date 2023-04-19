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

class PointVenteService {
  getAll() {
    return axios.get(`${environement.apiURL}api/point-vente`, header());
  }

  getListBy(id) {
    return axios.get(`${environement.apiURL}api/point-vente/${id}`, header());
  }

  insertPoint(data) {
    return axios.post(`${environement.apiURL}api/point-vente`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  }

  updatePoint(data, id) {
    return axios.put(
      `${environement.apiURL}api/point-vente/${id}`,
      data,
      header()
    );
  }

  daletePoint(id) {
    return axios.delete(
      `${environement.apiURL}api/point-vente/${id}`,
      header()
    );
  }
}

export default new PointVenteService();
