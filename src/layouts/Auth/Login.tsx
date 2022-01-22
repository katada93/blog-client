import styles from './Auth.module.css';

export const Login = () => {
  return (
    <div className={styles.login}>
      <input type='email' placeholder='Почта' />
      <input type='password' placeholder='Пароль' />
    </div>
  );
};
