import axiosInstance from "../axios-instance";

export const getProducts = (limit, page) =>
  axiosInstance.get(`/products${limit && `?limit=${limit}`}`);

export const getProduct = (id) => axiosInstance.get(`/products/${id}`);

export const createProduct = () => axiosInstance.post(`/products`);

export const updateProduct = (id) => axiosInstance.put(`/products/${id}`);

export const deleteProduct = (id) => axiosInstance.delete(`/products/${id}`);
