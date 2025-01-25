import axiosInstance from "../axios-instance";

export const getProductsApi = (limit = 10, page = 1) =>
  axiosInstance.get(
    `/products${limit && `?limit=${limit}`}${page && `&page=${page}`}`
  );

export const getProductApi = (id) => axiosInstance.get(`/products/${id}`);

export const createProductApi = (data, token) =>
  axiosInstance.post(`/products`, data, {
    headers: {
      auth: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });

export const updateProductApi = (id) => axiosInstance.put(`/products/${id}`);

export const deleteProductApi = (id, token) =>
  axiosInstance.delete(`/products/${id}`, {
    headers: {
      auth: `Bearer ${token}`,
    },
  });
