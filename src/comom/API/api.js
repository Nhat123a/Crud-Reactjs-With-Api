import axios from "axios";
import { data } from "autoprefixer";

const registerApi = (
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
const loginApi = (data) => {
  const URL_API = "https://localhost:7226/api/Account/Login";

  return axios.post(URL_API, data);
};
const getStudentByClass = () => {
  const URL_API = "https://localhost:7226/api/Student/StudentWithClass";

  return axios.get(URL_API);
};
const createStudent = (name, phoneNumber, address, dob) => {
  const data = { name, phoneNumber, address, dob };
  const URL_API = "https://localhost:7226/api/Student";
  return axios.post(URL_API, data);
};
const deleteStudent = (id) => {
  const URL_API = `https://localhost:7226/api/Student/${id}`;
  return axios.delete(URL_API);
};
const updateStudent = (id, data) => {
  const URL_API = `https://localhost:7226/api/Student/${id}`;
  return axios.put(URL_API, data);
};
const getStudentById = (id) => {
  const URL_API = `https://localhost:7226/api/Student/${id}`;
  return axios.get(URL_API);
};
const getClass = () => {
  const URL_API = "https://localhost:7226/api/Class";

  return axios.get(URL_API);
};
const createClass = (name, studentIds) => {
  const URL_API = "https://localhost:7226/api/Class";
  const data = { name, studentIds };
  return axios.post(URL_API, data);
};
const getAllStudent = () => {
  return axios.get("https://localhost:7226/api/Student/Students");
};
const deleteClass = (id) => {
  const BASE_URL = `https://localhost:7226/api/Class/${id}`;
  return axios.delete(BASE_URL);
};
const updateClass = (id, data) => {
  const BASE_URL = `https://localhost:7226/api/Class/${id}`;
  return axios.put(BASE_URL, data);
};
const getClassById = (id) => {
  const BASE_URL = `https://localhost:7226/api/Class/GetById/${id}`;
  return axios.get(BASE_URL);
};
export {
  registerApi,
  loginApi,
  getStudentById,
  getAllStudent,
  getClassById,
  getStudentByClass,
  createClass,
  createStudent,
  deleteClass,
  deleteStudent,
  updateClass,
  updateStudent,
  getClass,
};
