import axiosInstance from "../axios-instance";

export const getCategoriesApi = (limit, page) =>
  axiosInstance.get(
    `/categories${limit && `?limit=${limit}`}${page && `&page=${page}`}`
  );

export const getCategoryApi = (id) => axiosInstance.get(`/categories/${id}`);

export const createCategoryApi = (data) =>
  axiosInstance.post(`/categories`, data.form, {
    headers: {
      "Content-Type": "multipart/form-data",
      auth: `Bearer ${data.token}`,
    },
  });

export const updateCategoryApi = (id) => axiosInstance.put(`/categories/${id}`);

export const deleteCategoryApi = (id, token) =>
  axiosInstance.delete(`/categories/${id}`, {
    headers: {
      auth: `Bearer ${token}`,
    },
  });
