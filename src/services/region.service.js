import axios from "axios";
import environement from "../env";

const header = () => {
  const user_token = localStorage.getItem("user_token")
    ? localStorage.getItem("user_token")
    : "";
  const config = {
    headers: {
      Authorization: `Bearer ${user_token}`,
    },
  };
  return config;
};

class RegionService {
  getAll() {
    return axios.get(`${environement.apiURL}api/region`, header());
  }

  getListBy(id) {
    return axios.get(`${environement.apiURL}api/region/${id}`, header());
  }

  insertRegion(data) {
    return axios.post(`${environement.apiURL}api/region`, data, header());
  }

  updateRegion(data, id) {
    return axios.put(`${environement.apiURL}api/region/${id}`, data, header());
  }

  daleteRegion(id) {
    return axios.delete(`${environement.apiURL}api/region/${id}`, header());
  }
}

export default new RegionService();
