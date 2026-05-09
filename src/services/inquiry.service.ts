import axios from 'axios';

const API_URL = '/api/inquiry';

export const getInquiries = async () => axios.get(API_URL);
export const createInquiry = async (data: any) => axios.post(API_URL, data);
