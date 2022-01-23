import { ReactComponent as MailIcon } from '../../../assets/mail.svg';
import { ReactComponent as GoogleIcon } from '../../../assets/google.svg';
import { ReactComponent as GithubIcon } from '../../../assets/github.svg';
import styles from './Auth.module.css';
import { Login } from './Login';
import { Register } from './Register';
import { FormType } from '.';
import { Button } from '../../ui';

interface FormProps {
  formType: FormType;
  onToggleFormType: () => void;
}

export const Main = ({ formType, onToggleFormType }: FormProps) => {
  if (formType === 'login') {
    return <Login />;
  }

  if (formType === 'register') {
    return <Register />;
  }

  return (
    <div className={styles.main}>
      <Button onClick={onToggleFormType} variant='secondary' fullWidth>
        <MailIcon /> <span>Почта</span>
      </Button>
      <Button variant='secondary' fullWidth>
        <GithubIcon /> <span>Github</span>
      </Button>
      <Button variant='secondary' fullWidth>
        <GoogleIcon /> <span>Google</span>
      </Button>
    </div>
  );
};
