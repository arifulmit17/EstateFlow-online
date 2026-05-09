import axios from 'axios';

const API_URL = '/api/review';

export const getReviews = async () => axios.get(API_URL);
export const createReview = async (data: any) => axios.post(API_URL, data);
export const updateReview = async (id: string, data: any) => axios.put(`${API_URL}/${id}`, data);
export const deleteReview = async (id: string) => axios.delete(`${API_URL}/${id}`);
