import { FC } from 'react';
import { IAuth, ILogin } from '../../entities/Auth';
import { Container } from './styled';
import ImageSign from '../../assets/images/image-sign.png';
import TextField from '../../components/TextField';
import TextButton from '../../components/TextButton';

export interface ILoginProps {
  loading: boolean;
  logged: boolean;
  auth: IAuth;
  fecthAuth: (data: ILogin) => void;
  values: {
    email: string;
    password: string;
  };
  errors: any;
  handleChange: (e: any) => void;
  handleSubmit: (e: any) => void;
}

const Login: FC<ILoginProps> = ({
  loading,
  logged,
  auth,
  fecthAuth,
  values,
  errors,
  handleChange,
  handleSubmit,
}) => {
  return (
    <Container image={ImageSign}>
      <div className="image" />
      <div className="form">
        <span className="title">Sign In</span>
        <span className="description">Simplify your invoices in minutes.</span>
        <form onSubmit={handleSubmit} noValidate={true}>
          <TextField type="email" typeInput={'text'} name="email" placeholder="Your email" value={values.email} onChange={handleChange} errors={(errors.email && errors.email !== '') && (errors.email)} />
          <TextField type="password" typeInput={'text'} name="password" placeholder="Password" value={values.password} onChange={handleChange} errors={(errors.password && errors.password !== '') && (errors.password)} />
          {loading ? <div><span>Loading...</span></div> : <TextButton width="18.438" text={'Sign In'} type={'submit'} />}
        </form>
      </div>
    </Container>
  );
}

export default Login;