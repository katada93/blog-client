import styles from './Button.module.css';
import cn from 'classnames';
import { ButtonProps } from './Button.props';

export const Button = ({ children, variant, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(styles.button, {
        [styles.primary]: variant === 'primary',
        [styles.secondary]: variant === 'secondary',
      })}
      {...props}
    >
      {children}
    </button>
  );
};
