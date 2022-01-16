import styles from './Button.module.css';
import cn from 'classnames';
import { ButtonProps } from './Button.props';

export const Button = ({
  variant = 'primary',
  disabled = false,
  loading = false,
  children,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(styles.button, {
        [styles.primary]: variant === 'primary',
        [styles.secondary]: variant === 'secondary',
        [styles.disabled]: disabled,
        [styles.loading]: loading,
      })}
      disabled={disabled || loading}
      {...props}
    >
      {children}
    </button>
  );
};
