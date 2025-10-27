import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api";

export class ApiService {
   static login(username, password) {
      return axios.post(`${API_BASE_URL}/auth/login`, { username, password });
   }

   static getHello(token) {
      return axios.get(`${API_BASE_URL}/hello`, {
         headers: { Authorization: `Bearer ${token}`},
      }); 
   }
}