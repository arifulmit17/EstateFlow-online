import axios from 'axios';

const API_URL = '/api/ai-history';

export const getAIHistories = async () => axios.get(API_URL);
export const createAIHistory = async (data: any) => axios.post(API_URL, data);
