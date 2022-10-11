import api from './api';
import { API_AUTH } from '../constants/backend';
import Auth, { ILogin } from '../entities/Auth';
import { asyncLocalStorage } from '../utils/localStorage';

export const loginService = async (data: ILogin): Promise<Auth | unknown> => new Promise( async (resolve, reject) => {
  try {
    const response = await api.post(API_AUTH, data);
    if (response.status === 200) {
      await asyncLocalStorage.setItem('token', response.data.token);
      resolve(new Auth(response.data));
    }
  } catch (err) {
    reject(err);
  }
});