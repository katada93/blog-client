import styles from './Auth.module.css';

export const Register = () => {
  return (
    <div className={styles.register}>
      <input type='text' placeholder='Имя и фамилия' />
      <input type='email' placeholder='Почта' />
      <input type='password' placeholder='Пароль' />
    </div>
  );
};
