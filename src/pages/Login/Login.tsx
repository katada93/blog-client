import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { login } from '../../features/slices/auth/authSlice';
import { AppDispatch, RootState } from '../../features/store';
import { loginValidator } from '../../utils/validators';
import cl from './Login.module.css';

interface ILogin {
  email: string;
  password: string;
}

const Auth: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isAuth, user } = useSelector(({ auth }: RootState) => auth);

  console.log(user);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginValidator,
    onSubmit: ({ email, password }: ILogin) => {
      dispatch(login({ email, password }));
    },
  });

  if (isAuth) {
    return <Redirect to='/' />;
  }

  return (
    <form className={cl.loginForm} onSubmit={formik.handleSubmit}>
      <h1 className={cl.title}>Авторизация</h1>

      <input
        className={cl.email}
        id='email'
        type='text'
        placeholder='email'
        {...formik.getFieldProps('email')}
      />
      {formik.touched.email && formik.errors.email ? (
        <p className={cl.errorText}>{formik.errors.email}</p>
      ) : null}

      <input
        className={cl.password}
        id='password'
        type='password'
        placeholder='password'
        {...formik.getFieldProps('password')}
      />
      {formik.touched.password && formik.errors.password ? (
        <p className={cl.errorText}>{formik.errors.password}</p>
      ) : null}

      <button className={cl.login} type='submit'>
        Войти
      </button>
    </form>
  );
};

export default Auth;
