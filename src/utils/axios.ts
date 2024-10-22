import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

// const logout = () => useSignInStore.getState().signOut();

export const api = axios.create({
  baseURL: 'https://api-kma.zipai.vn/',
  timeout: 5000,
});

api.interceptors.request.use(async config => {
  const token = await AsyncStorage.getItem('access_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    // If 401 call signout store

    if (
      error.response.status === 401 &&
      !['/api/login'].includes(error.config.url)
    ) {
      console.debug('401 ???');
      //   logout();
    }

    return Promise.reject(error);
  },
);
