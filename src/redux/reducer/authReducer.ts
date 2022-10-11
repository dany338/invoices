import Auth from '../../entities/Auth';
import { AUTH_LOGIN, AUTH_LOGOUT } from '../types/auth';

interface IActionProps {
  type: string;
  payload: any | unknown;
}

interface IInitialState {
  logged: boolean;
  auth: Auth | null;
}

const initialState: IInitialState = {
  logged: false,
  auth: null,
};

export const authReducer = (state = initialState, action: IActionProps) => {
  switch (action.type) {
    case AUTH_LOGIN:
      return {
        ...state,
        logged: true,
        auth: action.payload,
      };
    case AUTH_LOGOUT:
      return {
        ...state,
        logged: false,
        auth: null,
      };
    default:
      return state;
  }
}