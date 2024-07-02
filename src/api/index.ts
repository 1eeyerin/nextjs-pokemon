import axios from "axios";

const apiClient = axios.create({
  timeout: 10000,
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export default apiClient;
