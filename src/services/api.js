import axios from "axios";

export const api = axios.create({
  baseURL: "https://foodexplorer-api-aa21.onrender.com/",
});
