import axios from 'axios';

const API_URL = '/api/appointment';

export const getAppointments = async () => axios.get(API_URL);
export const createAppointment = async (data: any) => axios.post(API_URL, data);
export const updateAppointment = async (id: string, data: any) => axios.put(`${API_URL}/${id}`, data);
export const deleteAppointment = async (id: string) => axios.delete(`${API_URL}/${id}`);
