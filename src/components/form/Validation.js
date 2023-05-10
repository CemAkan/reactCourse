import * as yup from "yup";

const validation = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required(),
});

export default validation;
