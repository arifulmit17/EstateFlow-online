import axios from 'axios';

const API_URL = '/api/report';

export const getReports = async () => axios.get(API_URL);
export const createReport = async (data: any) => axios.post(API_URL, data);
export const updateReport = async (id: string, data: any) => axios.put(`${API_URL}/${id}`, data);
