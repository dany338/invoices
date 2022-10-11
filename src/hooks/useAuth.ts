import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction, logoutAction } from '../redux/actions/auth';
import { ILogin } from '../entities/Auth';
import useValidation from './../hooks/useValidation';
import { validateAuth } from '../utils/validations';

const initialState = {
  email: '',
  password: '',
};

const useAuth = () => {
  const [ loading, setLoading ] = useState<boolean>(false);
  const dispatch = useDispatch();
  const { auth: { logged, auth } }: any = useSelector((state) => state);

  const fecthAuth = async () => {
    const data: ILogin = values;
    setLoading(true);
    await dispatch<any | unknown>(loginAction(data));
    setLoading(false);
  };

  const fecthLogout = async () => {
    setLoading(true);
    await dispatch<any | unknown>(logoutAction());
    setLoading(false);
  };

  const [ values, errors, handleChange, handleSubmit ] = useValidation(initialState, validateAuth, fecthAuth);

  return { loading, logged, auth, fecthAuth, fecthLogout, values, errors, handleChange, handleSubmit };
}

export default useAuth;