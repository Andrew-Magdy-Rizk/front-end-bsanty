import axiosInstance from "../axios-instance";

export const getProducts = (limit, page) =>
  axiosInstance.get(
    `/products${limit && `?limit=${limit}`}${page && `&page=${page}`}`
  );

export const getProduct = (id) => axiosInstance.get(`/products/${id}`);

export const createProduct = (data, token) =>
  axiosInstance.post(`/products`, data, {
    headers: {
      auth: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });

export const updateProduct = (id) => axiosInstance.put(`/products/${id}`);

export const deleteProduct = (id) => axiosInstance.delete(`/products/${id}`);
