import axiosInstance from "../axios-instance";

export const getCategoriesApi = (limit, page) =>
  axiosInstance.get(
    `/categories${limit !== null && `?limit=${limit}`}${
      page && `&page=${page}`
    }`
  );

export const getCategoryApi = (id) => axiosInstance.get(`/categories/${id}`);

export const createCategoryApi = () => axiosInstance.post(`/categories`);

export const updateCategoryApi = (id) => axiosInstance.put(`/categories/${id}`);

export const deleteCategoryApi = (id) =>
  axiosInstance.delete(`/categories/${id}`);
