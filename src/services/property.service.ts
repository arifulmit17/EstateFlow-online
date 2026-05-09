import axios from 'axios';

const API_URL = '/api/property';

export const getProperties = async () => axios.get(API_URL);
export const getPropertyById = async (id: string) => axios.get(`${API_URL}/${id}`);
export const createProperty = async (data: any) => axios.post(API_URL, data);
export const updateProperty = async (id: string, data: any) => axios.put(`${API_URL}/${id}`, data);
export const deleteProperty = async (id: string) => axios.delete(`${API_URL}/${id}`);
