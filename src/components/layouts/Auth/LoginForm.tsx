import { useForm } from 'react-hook-form';
import styles from './Auth.module.css';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '../../../utils/validators';
import { Button } from '../../ui';
import { login } from '../../../features/slices/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../features/store';

interface LoginFormData {
  email: string;
  password: string;
}

export const LoginForm: React.FC = () => {
  const { register, handleSubmit, formState, reset } = useForm<LoginFormData>({
    mode: 'onChange',
    resolver: yupResolver(loginSchema),
  });

  const dispatch = useDispatch<AppDispatch>();
  const { isAuth, user, error } = useSelector(({ auth }: RootState) => auth);

  const onSubmit = handleSubmit((data) => {
    try {
      dispatch(login(data));
    } catch (error: any) {
      console.warn('Register error', error.message);
    }
    reset();
  });

  return (
    <form className={styles.login} onSubmit={onSubmit}>
      <label>
        <input
          autoFocus
          {...register('email')}
          type='email'
          placeholder='Почта'
        />
      </label>
      <p className={styles.errorField}>{formState.errors.email?.message}</p>
      <label>
        <input {...register('password')} type='password' placeholder='Пароль' />
      </label>
      <p className={styles.errorField}>{formState.errors.password?.message}</p>
      <Button disabled={!formState.isValid || formState.isSubmitting}>
        Войти
      </Button>
    </form>
  );
};
