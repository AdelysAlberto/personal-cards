import AxiosInstance from './Axios';

const METHODS = ['get', 'put', 'post', 'patch', 'delete'];

export function setAccessToken(accessToken) {
  AxiosInstance.defaults.headers.common.Authorization = accessToken;
}

const httpMethods = METHODS.map(method => (url, requestConfig = {}) =>
  AxiosInstance.request({
    url,
    method,
    ...requestConfig,
  }),
);

export const [get, put, post, patch, del] = httpMethods;
