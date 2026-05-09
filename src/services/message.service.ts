import axios from 'axios';

const API_URL = '/api/message';

export const getMessages = async () => axios.get(API_URL);
export const sendMessage = async (data: any) => axios.post(API_URL, data);
