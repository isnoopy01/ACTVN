import {api} from '../utils/axios';
export const listTeacher = async () => {
  const response = await api.get('/api/teachers');
  return response.data;
};

export const searchUser = async param => {
  const response = await api.post('/api/usersSearch', param);
  return response.data;
};

export const detailUser = async param => {
  const response = await api.post('/api/users', param);
  return response.data;
};
