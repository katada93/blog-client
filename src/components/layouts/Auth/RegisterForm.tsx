import { useForm } from 'react-hook-form';
import styles from './Auth.module.css';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerSchema } from '../../../utils/validators';
import { Button } from '../../ui';
import { useState } from 'react';

interface RegisterFormData {
  name: string;
  email: string;
  password: string;
}

export const RegisterForm: React.FC = () => {
  const [nameLength, setNameLength] = useState<number>(30);

  const { register, handleSubmit, formState, reset } =
    useForm<RegisterFormData>({
      mode: 'onChange',
      resolver: yupResolver(registerSchema),
    });

  const onSubmit = handleSubmit((data) => {
    reset();
  });

  return (
    <form className={styles.register} onSubmit={onSubmit}>
      <label>
        <input
          autoFocus
          {...register('name')}
          maxLength={30}
          onChange={(e) => setNameLength(nameLength - 1)}
          type='text'
          placeholder='Имя'
        />
        <span className={styles.nameLength}>{nameLength}</span>
      </label>
      <p className={styles.errorField}>{formState.errors.name?.message}</p>
      <label>
        <input {...register('email')} type='email' placeholder='Почта' />
      </label>
      <p className={styles.errorField}>{formState.errors.email?.message}</p>
      <label>
        <input {...register('password')} type='password' placeholder='Пароль' />
      </label>
      <p className={styles.errorField}>{formState.errors.password?.message}</p>
      <Button disabled={!formState.isValid || formState.isSubmitting}>
        Зарегистрироваться
      </Button>
    </form>
  );
};
