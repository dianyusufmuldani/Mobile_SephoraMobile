import axios from 'axios';

const baseURL = 'https://ancient-water-1781.getsandbox.com:443/';
const hitApi = axios.create({
  baseURL: baseURL,
});

hitApi.interceptors.request.use(request => {
  console.log('request', request);
  return request;
});

export const hitLogin = requestParam => {
  return hitApi.post('signup', requestParam);
};

export const hitHome = requestParam => {
  return hitApi.post('getprimary', requestParam);
};
