import axiosInstance from "../axios-instance";

export const signup = (data) => axiosInstance.post("/auth/signup", data);

export const login = (data) => axiosInstance.post("/auth/login", data);
