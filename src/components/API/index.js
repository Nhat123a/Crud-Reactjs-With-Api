import axios from "axios";
import { data } from "autoprefixer";

const RegisterApi = (
  name,
  email,
  userName,
  password,
  passwordConfirm,
  role
) => {
  const URL_API = "https://localhost:7226/api/Account/SignUp";
  const data = {
    name,
    email,
    userName,
    password,
    passwordConfirm,
    role,
  };
  return axios.post(URL_API, data);
};
const LoginApi = (username, password) => {
  const URL_API = "https://localhost:7226/api/Account/Login";
  const data = {
    username,
    password,
  };
  return axios.post(URL_API, data);
};

const getStudentApiByClass = () => {
  const URL_API = "https://localhost:7226/api/Student/StudentWithClass";

  return axios.get(URL_API);
};
const CreateStudent = (name, phoneNumber, address, dob) => {
  const data = { name, phoneNumber, address, dob };
  const URL_API = "https://localhost:7226/api/Student";
  return axios.post(URL_API, data);
};

const deleteApi = (id) => {
  const URL_API = `https://localhost:7226/api/Student/${id}`;
  return axios.delete(URL_API);
};
const putApiStudent = (id, data) => {
  const URL_API = `https://localhost:7226/api/Student/${id}`;
  return axios.put(URL_API, data);
};
const GetstudentById = (id) => {
  const URL_API = `https://localhost:7226/api/Student/${id}`;
  return axios.get(URL_API);
};
const GetclassAPI = () => {
  const URL_API = "https://localhost:7226/api/Class";

  return axios.get(URL_API);
};
const CreateClassAPI = (name, studentIds) => {
  const URL_API = "https://localhost:7226/api/Class";
  const data = { name, studentIds };
  return axios.post(URL_API, data);
};
const getStudentAPI = () => {
  return axios.get("https://localhost:7226/api/Student/Students");
};
const deleteClassApi = (id) => {
  const BASE_URL = `https://localhost:7226/api/Class/${id}`;
  return axios.delete(BASE_URL);
};
export {
  RegisterApi,
  LoginApi,
  getStudentApiByClass,
  deleteApi,
  CreateStudent,
  GetstudentById,
  putApiStudent,
  GetclassAPI,
  CreateClassAPI,
  deleteClassApi,
  getStudentAPI,
};
