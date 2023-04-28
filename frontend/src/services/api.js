import axios from "axios";

const api = axios.create({
  baseURL: "https://api-be-the-hero.onrender.com/",
});

export default api;
