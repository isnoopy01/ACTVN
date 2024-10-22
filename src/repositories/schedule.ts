import {api} from '../utils/axios';
export const getSchedule = async () => {
  const response = await api.get('/api/schedule');
  return response.data;
};
