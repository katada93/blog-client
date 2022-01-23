import { useForm } from 'react-hook-form';
import { Button } from '../../components';
import styles from './Auth.module.css';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerSchema } from '../../utils/validators';

interface RegisterData {
  name: string;
  email: string;
  password: string;
}

export const Register = () => {
  const { register, handleSubmit, formState, reset } = useForm<RegisterData>({
    mode: 'onChange',
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    reset();
  });

  return (
    <form className={styles.register} onSubmit={onSubmit}>
      <input {...register('name')} type='text' placeholder='Имя' />
      <p className={styles.errorField}>{formState.errors.name?.message}</p>
      <input {...register('email')} type='email' placeholder='Почта' />
      <p className={styles.errorField}>{formState.errors.email?.message}</p>
      <input {...register('password')} type='password' placeholder='Пароль' />
      <p className={styles.errorField}>{formState.errors.password?.message}</p>
      <Button disabled={!formState.isValid || formState.isSubmitting}>
        Зарегистрироваться
      </Button>
    </form>
  );
};
