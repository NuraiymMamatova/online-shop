import * as yup from "yup";

const validationAuthSignUp = yup.object().shape({
  email: yup
    .string()
    .required("Заполните электронный адрес! Это обязательное поле!"),
  name: yup.string().required("Введите имя! Это обязательное поле!"),
  password: yup
    .string()
    .min(5, "Пароль должен быть больше пяти символов!")
    .max("100")
    .required("Введите пароль! Это обязательное поле!"),
  confirmPassword: yup
    .string()
    // .oneOf([yup.ref("password"), null], "Пароли должны совпадать!")
    .required("Подтвердите пароль!"),
});

const validationAuthSignIn = yup.object().shape({
  email: yup
    .string()
    .required("Заполните электронный адрес! Это обязательное поле!"),
  password: yup
    .string()
    .min(5, "Пароль должен быть больше пяти символов!")
    .max("100")
    .required("Введите пароль! Это обязательное поле!"),
});

export { validationAuthSignUp, validationAuthSignIn };
