import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
  email: Yup.string().email('Некорректный email').required('Обязательное поле'),
  password: Yup.string()
    .min(4, 'Пароль должен быть больше 4 символов')
    .required('Обязательное поле'),
});

export const registerSchema = Yup.object()
  .shape({
    name: Yup.string().required('Обязательное поле'),
  })
  .concat(loginSchema);
