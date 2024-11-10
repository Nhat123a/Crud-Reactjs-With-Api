import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup.string().trim().min(3, "min 3 characters ").required("Name required!"),
  dob: yup
    .date()
    .required("dob required")
    .typeError("Format required: YYYY-MM-DD"),
  phoneNumber: yup
    .string()
    .required("Phone required!")
    .matches(/^\d{10}$/, "Phone number must be exactly 10 digits"),
  address: yup.string().trim().min(5,'min 5 characters ').required("Address required!"),
});
