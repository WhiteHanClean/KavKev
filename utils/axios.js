import axios from 'axios';
import { API_URL } from './constants';

const $api = axios.create({
  baseURL: API_URL,
});

$api.interceptors.request.use(
  (config) => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('userToken');
      if (token) {
        return {
          ...config,
          headers: {
            Authorization: `Token ${token}`,
          },
        };
      }
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default $api;
