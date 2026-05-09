import axios from 'axios';

const API_URL = '/api/saved-property';

export const getSavedProperties = async () => axios.get(API_URL);
export const saveProperty = async (data: any) => axios.post(API_URL, data);
export const removeSavedProperty = async (id: string) => axios.delete(`${API_URL}/${id}`);
