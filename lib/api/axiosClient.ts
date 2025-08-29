import axios from "axios";
export const axiosClient = axios.create({
  baseURL: "https://api.deezer.com",
  timeout: 10000,
});
