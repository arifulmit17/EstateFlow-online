import axios from 'axios';

const API_URL = '/api/blog';

export const getBlogs = async () => axios.get(API_URL);
export const getBlogById = async (id: string) => axios.get(`${API_URL}/${id}`);
export const createBlog = async (data: any) => axios.post(API_URL, data);
export const updateBlog = async (id: string, data: any) => axios.put(`${API_URL}/${id}`, data);
export const deleteBlog = async (id: string) => axios.delete(`${API_URL}/${id}`);
