import { useFormik } from "formik";
import { Button } from "../../UI/Button";
import { Input } from "../../UI/Input";
import { validationAuthSignIn } from "../../helpers/validate/authValidate";
import { FormWrapper } from "../../layout/FormWrapper";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../redux/slices/authSlice";

export const SignInForm = () => {
  const { isLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const submitHandler = () => {
    dispatch(
      signIn({
        email: values.email,
        password: values.password,
      })
    );
  };

  const { values, handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: submitHandler,
    validateOnChange: false,
    validationSchema: validationAuthSignIn,
  });

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <h2>Вход</h2>

      <Input
        fullWidth
        label="Почта"
        type="email"
        name="email"
        value={values.email}
        onChange={handleChange}
        error={Boolean(errors?.email)}
        helperText={errors?.email}
      />

      <Input
        fullWidth
        label="Пароль"
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
        error={Boolean(errors?.password)}
        helperText={errors?.password}
      />
      <Button type={"submit"} loading={isLoading}>
        Войти
      </Button>
    </FormWrapper>
  );
};
