import { ReactComponent as MailIcon } from '../../../assets/mail.svg';
import { ReactComponent as GoogleIcon } from '../../../assets/google.svg';
import { ReactComponent as GithubIcon } from '../../../assets/github.svg';
import styles from './Auth.module.css';
import { LoginForm } from './LoginForm';
import { RegisterForm } from './RegisterForm';
import { Button } from '../../ui';
import { FormType } from '.';

interface MainProps {
  formType: FormType;
  onToggle: () => void;
}

export const Main: React.FC<MainProps> = ({ formType, onToggle }) => {
  if (formType === 'login') {
    return <LoginForm />;
  }

  if (formType === 'register') {
    return <RegisterForm />;
  }

  return (
    <div className={styles.main}>
      <Button onClick={onToggle} variant='secondary' fullWidth>
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
