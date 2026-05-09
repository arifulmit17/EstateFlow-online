import axios from 'axios';

const API_URL = '/api/notification';

export const getNotifications = async () => axios.get(API_URL);
export const markAsRead = async (id: string) => axios.patch(`${API_URL}/${id}/read`);
