import { useForm } from 'react-hook-form';
import { Button } from '../../components';
import styles from './Auth.module.css';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '../../utils/validators';

interface LoginData {
  email: string;
  password: string;
}

export const Login = () => {
  const { register, handleSubmit, formState, reset } = useForm<LoginData>({
    mode: 'onChange',
    resolver: yupResolver(loginSchema),
  });

  console.log(formState);

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    reset();
  });

  return (
    <form className={styles.login} onSubmit={onSubmit}>
      <input {...register('email')} type='email' placeholder='Почта' />
      <p className={styles.errorField}>{formState.errors.email?.message}</p>
      <input {...register('password')} type='password' placeholder='Пароль' />
      <p className={styles.errorField}>{formState.errors.password?.message}</p>
      <Button disabled={!formState.isValid || formState.isSubmitting}>
        Войти
      </Button>
    </form>
  );
};
