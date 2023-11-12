import axios from "axios";

const http = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

axios.defaults.headers.post["Content-type"] = "aplication/json";
axios.defaults.headers.post["Accept"] = "aplication/json";

export default http;
