import axios from "axios";

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
const LoginApi = (username,password)=>{
  const URL_API= "https://localhost:7226/api/Account/Login";
  const data = {
    username,password
  }
  return axios.post(URL_API,data)
}

const getStudentApiByClass = ()=>{
  const URL_API = "https://localhost:7226/api/Student/StudentWithClass"

  return axios.get(URL_API)
}
const CreateStudent = (name,phoneNumber,address,dob)=>{
  const data = {name,phoneNumber,address,dob}
  const URL_API = "https://localhost:7226/api/Student"
  return axios.post(URL_API,data)
}

const deleteApi = (id)=>{
  const URL_API= `https://localhost:7226/api/Student/${id}`
  return axios.delete(URL_API)
}
const putApiStudent = (id)=>{

  const URL_API = `https://localhost:7226/api/Student/${id}`
  return axios.post(URL_API)
}
export { RegisterApi ,LoginApi,getStudentApiByClass,deleteApi
   ,CreateStudent,putApiStudent};
