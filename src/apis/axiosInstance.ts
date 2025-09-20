import axios from "axios";
import { getAccessToken } from "../utils/authTokenStorage";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// 요청 인터셉터 - accessToken 자동 추가
axiosInstance.interceptors.request.use(
  (config) => {
    const token = getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI0IiwianRpIjoiNWEwNzQwYjgtNmI1Yy00YTU1LTg2ZTEtY2IyYjUwMzI0OTFiIiwiaWF0IjoxNzU4MzczMzI5LCJleHAiOjE3NTg0NTk3Mjl9.46bbPlWgE0QOxZrf2Jt1a4js8gIKA0N5gyp_ZUocXn8 `;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 응답 인터셉터
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // 단순 에러 반환
    return Promise.reject(error);
  }
);

export default axiosInstance;
