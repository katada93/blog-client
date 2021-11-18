import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../features/slices/authSlice';
import { AppDispatch, RootState } from '../../features/store';
import cl from './Login.module.css';

const Auth = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isAuth, user } = useSelector(({ auth }: RootState) => auth);

  console.log(isAuth, user);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
    };
    const email = target.email.value;
    const password = target.password.value;

    dispatch(login({ email, password }));

    target.email.value = '';
    target.password.value = '';
  };

  return (
    <div className={cl.auth}>
      <h1 className={cl.title}>Авторизация</h1>
      <form onSubmit={onSubmit}>
        <label>
          <span>email: </span>
          <input type='text' name='email' />
        </label>
        <label>
          <span>password: </span>
          <input type='password' name='password' />
        </label>
        <button>Login</button>
      </form>
    </div>
  );
};

export default Auth;
