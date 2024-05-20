import axios, { AxiosInstance } from "axios";

//여기에 서버 주소기입
const BASE_URL = "http://43.200.162.185:8080/";

const HttpClient: AxiosInstance = axios.create({
  baseURL: BASE_URL, // 기본 서버 주소 입력
});

HttpClient.interceptors.request.use((config) => {
  return config;
});

export default HttpClient;
