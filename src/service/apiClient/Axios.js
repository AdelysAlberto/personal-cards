import axios from 'axios';

import { API_URL } from '../../config';

const AxiosInstance = axios.create({ baseURL: API_URL, timeout: 6000 });

const validateAxiosResponse = response => {
  if (response.status === 416) {
    return console.log('fatal error');
  }
  return response.data;
};

AxiosInstance.interceptors.request.use(
  request => request,
  error => Promise.reject(error),
);

AxiosInstance.interceptors.response.use(
  response => validateAxiosResponse(response),
  error => Promise.reject(error),
);

export default AxiosInstance;
