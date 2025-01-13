import axiosInstance from "../axios-instance";

export const getCategories = (limit, page) =>
  axiosInstance.get(`/categories${limit && `?limit=${limit}`}`);

export const getCategory = (id) => axiosInstance.get(`/categories/${id}`);

export const createCategory = () => axiosInstance.post(`/categories`);

export const updateCategory = (id) => axiosInstance.put(`/categories/${id}`);

export const deleteCategory = (id) => axiosInstance.delete(`/categories/${id}`);
