import axios from 'axios';
import { BACKEND_URL } from '../constants/backend';
import { asyncLocalStorage } from '../utils/localStorage';

// let token = null;
// let headers: any = {
//   'Accept': 'application/json',
//   'Content-Type': 'application/json',
// };

// (async () => {
//   token = await asyncLocalStorage.getItem('token') || null;
//   if (token) {
//     headers = {
//       ...headers,
//       'Authorization': `Bearer ${token}`
//     };
//   }
// })();

const api = axios.create({
  baseURL: BACKEND_URL,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
  },
  timeout: 30_000,
});

// Add a request interceptor
api.interceptors.request.use(async (config: any) => {
  const token = await asyncLocalStorage.getItem('token') ?? null;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  // config.headers.Accept = 'application/json';
  // config.headers['Content-Type'] = 'application/json; charset=utf-8';
  return config;
}, (error) => Promise.reject(error));

export default api;