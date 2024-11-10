import * as yup from "yup";
export const schemaLogin = yup.object({
  username: yup
    .string()
    .trim()
    .min(3, "userName required 3 characters")
    .required("UserName required!"),
  password: yup.string().required("Password required!"),
});
export const schemaRegister = yup.object({
  username: yup
    .string()
    .trim()
    .min(3, "userName required 3 characters")
    .required("UserName required!"),
  name: yup.string().trim().required("Name required!"),
  email: yup.string().required("Email required!"),
  password: yup
    .string()
    .required("Password required!")
    .min(6, "Password must be at least 6 characters long!")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter!")
    .matches(/[0-9]/, "Password must contain at least one number!"),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password is fails")
    .required("Confirm password required!"),
});
