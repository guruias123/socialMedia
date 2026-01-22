import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:4000",
});

apiClient.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.error("Interceptor - Request Error:", error);
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => {
    return response?.data ?? response;
  },
  (error) => {
    console.error("Interceptor - Response Error:", error);
    return Promise.reject(error);
  }
);

export default apiClient;
