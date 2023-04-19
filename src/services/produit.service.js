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

class ProduitService {
  getAll() {
    return axios.get(`${environement.apiURL}api/produit`, header());
  }

  getListBy(id) {
    return axios.get(`${environement.apiURL}api/produit/${id}`, header());
  }

  insertProduit(data) {
    return axios.post(`${environement.apiURL}api/produit`, data, header());
  }

  updateProduit(data, id) {
    return axios.post(
      `${environement.apiURL}api/produit/${id}`,
      data,
      header()
    );
  }

  daleteProduit(id) {
    return axios.delete(`${environement.apiURL}api/produit/${id}`, header());
  }

  pay() {
    return axios.post(`${environement.apiURL}api/payment`, header());
  }
  mail() {
    return axios.get(`${environement.apiURL}api/facturationMail`, header());
  }
}

export default new ProduitService();
