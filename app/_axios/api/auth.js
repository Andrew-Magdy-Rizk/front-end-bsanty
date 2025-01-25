import axiosInstance from "../axios-instance";

export const signupApi = (data) => axiosInstance.post("/auth/signup", data);

export const loginApi = (data) => axiosInstance.post("/auth/login", data);
