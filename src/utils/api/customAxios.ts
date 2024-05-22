import axios, { AxiosInstance } from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

const BASE_URL = apiUrl;

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
