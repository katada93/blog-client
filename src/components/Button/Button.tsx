import styles from './Button.module.css';
import cn from 'classnames';
import { ButtonProps } from './Button.props';

export const Button = ({
  variant = 'primary',
  disabled = false,
  loading = false,
  fullWidth = false,
  className,
  children,
  ...props
}: ButtonProps): JSX.Element => {
  const classes = cn(className, styles.button, {
    [styles.primary]: variant === 'primary',
    [styles.secondary]: variant === 'secondary',
    [styles.disabled]: disabled,
    [styles.loading]: loading,
    [styles.fullWidth]: fullWidth,
  });

  return (
    <button className={classes} disabled={disabled || loading} {...props}>
      {children}
    </button>
  );
};
