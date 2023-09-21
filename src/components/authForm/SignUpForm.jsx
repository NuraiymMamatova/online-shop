import { CircularProgress, styled } from "@mui/material";
import { useFormik } from "formik";
// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../UI/Button";
import { Input } from "../../UI/Input";
import { validationAuthSignUp } from "../../helpers/validate/authValidate";
import { signUp } from "../../redux/slices/authSlice";
import { FormWrapper } from "../../layout/FormWrapper";
import { Link } from "react-router-dom";

export const SignUpForm = () => {
  const { isLoading } = useSelector((state) => state.auth);
  // const [checkPassword, setCheckPassword] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    if (values.password === values.confirmPassword) {
      dispatch(
        signUp({
          email: values.email,
          name: values.name,
          password: values.password,
        })
      );
      // setCheckPassword(false);
    } else {
      // setCheckPassword(true);
    }
  };

  const { values, handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      email: "",
      name: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit,
    validateOnChange: false,
    validationSchema: validationAuthSignUp,
  });

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <h2>Регистрация</h2>

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
        label="Имя"
        type="text"
        name="name"
        value={values.name}
        onChange={handleChange}
        error={Boolean(errors?.name)}
        helperText={errors?.name}
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

      <Input
        fullWidth
        label="Подтвердите пароль"
        type="password"
        name="confirmPassword"
        value={values.confirmPassword}
        onChange={handleChange}
        error={Boolean(errors?.confirmPassword)}
        helperText={errors?.confirmPassword}
      />
      {/* <ErrorMessage>{showErrorsSignUp(errors)}</ErrorMessage>
        {checkPassword && <ErrorMessage>{"Пароли не совпадают!"}</ErrorMessage>} */}
      <Button type={"submit"}>
        {isLoading ? (
          <CircularProgress size={"1.5rem"} />
        ) : (
          "Зарегистрироваться"
        )}
      </Button>
      <Paragraph>
        Уже зарегистрированы? <Link to={"/sign-in"}>Войти</Link>
      </Paragraph>
    </FormWrapper>
  );
};

const Paragraph = styled("p")`
  margin-top: -19px;
  & span {
    color: #30723f;
  }
`;
