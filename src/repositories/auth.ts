import {api} from '../utils/axios';
export const signInUser = async (params: any) => {
  const response = await api.post('/api/login', params);
  return response.data;
};
