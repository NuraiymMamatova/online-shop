export const showErrorsSignUp = (errors) => {
  let errorMessage = null;
  if (Object.keys(errors).length > 1) {
    errorMessage = "Пожалуйста заполните все поля!";
  } else if (errors?.email) {
    errorMessage = errors?.email;
  } else if (errors?.name) {
    errorMessage = errors?.name;
  } else if (errors?.password) {
    errorMessage = errors?.password;
  } else if (errors?.confirmPassword) {
    errorMessage = errors?.confirmPassword;
  }
  return errorMessage;
};
