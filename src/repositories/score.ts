import {api} from '../utils/axios';
export const listScore = async () => {
  const response = await api.get('/api/score');
  return response.data;
};
