import * as Yup from 'yup';

export const loginValidator = Yup.object({
  email: Yup.string().email('Невалидный email!').required('Обязательное поле'),
  password: Yup.string()
    .min(4, 'Пароль должен быть больше 4 и меньше 10 символов')
    .max(10, 'Пароль должен быть больше 4 и меньше 10 символов')
    .required('Обязательное поле!'),
});
