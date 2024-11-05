import { data } from "autoprefixer";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {  Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { LoginApi } from "../../components/API";
import Toast from "../../components/Toast";
const Login = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const handleShowPassword = (e) => {
    setShow(e.target.checked);
  };

  const schema = yup
  .object({
    username: yup.string().required("UserName required!"),
    password: yup.string().required("Password required!"),
  })
  .shape();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onsubmit = async (data)=>{
    const {username,password} = data
    try{
      const res = await LoginApi(username,password)
      // console.log(">>>>>>Response:",res.data)
      if(res.status===200){
        localStorage.setItem('user', JSON.stringify(res.data))
        // console.log('>>>>>>Login Succes')
        // console.log(user)
        Toast("success","Login Success")
        navigate('/')
      }
    }catch(err){
      // console.log(">>>>>Lỗi Login: ",err)
      Toast("error","Incorrect username or password")
    }
  }
  return (
    <div className="bg-white   p-7 rounded-md shadow-md w-full max-w-md">
      <div className="text-center">
        <span className="text-2xl">Please sign in</span>
      </div>
      {/* Form */}
      <form onSubmit={handleSubmit(onsubmit)} className="mt-7">
        <input
          {...register("username")}
          placeholder="UserName"
          className={`block  mb-3 w-full text-[15px] rounded px-[10px] h-12  border ${
            errors.username ? "border-red-500" : "border-[#e6e6e6]"
          } outline-none`}
        />
        <input
          {...register("password")}
          placeholder="Password"
          type={show ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={`block  mb-3 w-full text-[15px] rounded px-[10px] h-12  border ${
            errors.password ? "border-red-500" : "border-[#e6e6e6]"
          } outline-none`}   
                />
        <div className="flex gap-2 items-center justify-center mb-5">
          <input type="checkbox" checked={show} onChange={handleShowPassword} />
          <label>Show password</label>
        </div>
        <div className="flex gap-2 items-center justify-center mb-5">
          <label>
            Don't have account?{" "}
            <Link to="/account/register" className="underline text-blue-500">
              Sign up
            </Link>
          </label>
        </div>
        <input
          className="bg-blue-500 mb-3 cursor-pointer w-full p-3   text-white text-xl  rounded"
          type="submit"
          value="Sign in"
        />
        <div className="w-full my-5 border-b border-gray-300 "></div>

        <button
          className="bg-red-500 uppercase mb-3 cursor-pointer w-full p-3 text-white font-semibold rounded flex items-center justify-center"
          type="submit"
        >
          <FaGoogle size={18} className="mr-2" /> Sign in with Google
        </button>
        <button
          className="bg-blue-800 uppercase mb-3 cursor-pointer w-full p-3 text-white font-semibold rounded flex items-center justify-center"
          type="submit"
        >
          <FaFacebook size={18} className="mr-2" /> Sign in with Facebook
        </button>
      </form>
    </div>
  );
};

export default Login;
