import axios, { AxiosInstance } from "axios";

const BASE_URL = "http://43.200.162.185:8080/";

const HttpClient: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});

HttpClient.interceptors.request.use(
  (config) => {
    if (config.headers) {
      config.headers.Authorization = localStorage.getItem("token");
    }
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

export default HttpClient;
