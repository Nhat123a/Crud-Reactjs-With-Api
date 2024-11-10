import * as yup from "yup";

export const schemaCLass = yup.object().shape({
  name: yup.string().trim().min(3).required("Name required!"),
});
