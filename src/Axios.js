import axios from "axios";
import { Url } from "./Server";
const Axios = axios.create({
  baseURL: Url
});

Axios.interceptors.request.use(async config => {
  if (localStorage.getItem('token_jwt')) {
    config.headers.Authorization = 'Bearer '+localStorage.getItem('token_jwt');
  }
  return config;
});

export default Axios;

