import Auth, { ILogin } from '../../entities/Auth';
import { loginService } from '../../services/auth';
import { AUTH_LOGIN, AUTH_LOGOUT } from '../types/auth';
import { asyncLocalStorage } from '../../utils/localStorage';

export const loginAction = (data: ILogin) => async (dispatch: any) => {
  try {
    const response: Auth | unknown = await loginService(data);
    dispatch({
      type: AUTH_LOGIN,
      payload: response,
    });
  } catch (err) {
    console.log(err);
  }
};

export const logoutAction = () => async (dispatch: any) => {
  try {
    await asyncLocalStorage.removeItem('token');
    dispatch({
      type: AUTH_LOGOUT,
    });
  } catch (err) {
    console.log(err);
  }
};
