import {api} from '../utils/axios';
export const specializedTopic = async () => {
  const response = await api.get('/api/specialized');
  return response.data;
};

export const registerSpecialized = async (param: any) => {
  const response = await api.get('/api/specialized', param);
  return response.data;
};

export const projectTopic = async () => {
  const response = await api.get('/api/project');
  return response.data;
};

export const registerProject = async (param: any) => {
  const response = await api.post('/api/project', param);
  return response.data;
};
