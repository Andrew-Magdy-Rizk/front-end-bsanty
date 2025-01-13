import { default as axios } from "axios";
const axiosInstance = axios.create({
  baseURL: "https://server-bsnty.vercel.app/api/v1",
});

export default axiosInstance;
