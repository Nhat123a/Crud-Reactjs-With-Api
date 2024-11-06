import { data } from "autoprefixer";
import React, { memo, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { RegisterApi } from "../../components/API";
import Toast from "../../components/Toast";

const Register = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const handleShowPassword = (e) => {
    setShow(e.target.checked);
  };
  const schema = yup
    .object({
      username: yup.string().required("UserName required!"),
      name: yup.string().required("Name required!"),
      email: yup.string().required("Email required!"),
      password: yup
        .string()
        .required("Password required!")
        .min(6, "Password must be at least 6 characters long!")
        .matches(
          /[A-Z]/,
          "Password must contain at least one uppercase letter!"
        )
        .matches(/[0-9]/, "Password must contain at least one number!"),
      passwordConfirm: yup
        .string()
        .oneOf([yup.ref("password"), null], "Password is fails")
        .required("Confirm password required!"),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onsubmit = async (data) => {
    try {
      const { name, email, username, password, passwordConfirm } = data;
      const role = "";
      const res = await RegisterApi(
        name,
        email,
        username,
        password,
        passwordConfirm,
        role
      );
      // console.log(res);
      if (res.status === 200) {
        navigate("/account/login");
        // console.log(">>>>>>Succes :", res.data);
        Toast("success", "Register Success");
      }
    } catch (err) {
      // console.log(">>>>>>Lỗi :", err);
      Toast("error", "Register Failed");
    }
  };
  return (
    <div className="bg-white   p-7 rounded-md shadow-md w-full max-w-md">
      <div className="text-center">
        <span className="text-2xl">Register</span>
      </div>
      {/* Form */}
      <form onSubmit={handleSubmit(onsubmit)} className="mt-7">
        <span className="text-red-500">{errors.username?.message}</span>
        <input
          {...register("username")}
          placeholder="UserName *"
          className={`block mb-3 w-full text-[15px] rounded px-[10px] h-12  border ${
            errors.username ? "border-red-500" : "border-[#e6e6e6]"
          }  outline-none`}
        />
        <span className="text-red-500">{errors.name?.message}</span>

        <input
          {...register("name")}
          placeholder="Name *"
          className={`block mb-3 w-full text-[15px] rounded px-[10px] h-12  border ${
            errors.name ? "border-red-500" : "border-[#e6e6e6]"
          }  outline-none`}
        />
        <span className="text-red-500">{errors.email?.message}</span>

        <input
          {...register("email")}
          placeholder="Email *"
          type="email"
          className={`block mb-3 w-full text-[15px] rounded px-[10px] h-12  border ${
            errors.email ? "border-red-500" : "border-[#e6e6e6]"
          }  outline-none`}
        />
        <span className="text-red-500">{errors.password?.message}</span>

        <input
          {...register("password")}
          placeholder="Password *"
          type={show ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={`block mb-3 w-full text-[15px] rounded px-[10px] h-12  border ${
            errors.password ? "border-red-500" : "border-[#e6e6e6]"
          }  outline-none`}
        />
        <span className="text-red-500">{errors.passwordConfirm?.message}</span>
        <input
          {...register("passwordConfirm")}
          placeholder="Password Confirm *"
          type={show ? "text" : "password"}
          className={`block mb-3 w-full text-[15px] rounded px-[10px] h-12  border ${
            errors.passwordConfirm ? "border-red-500" : "border-[#e6e6e6]"
          }  outline-none`}
        />
        <div className="flex gap-2 items-center  mb-5">
          <input type="checkbox" checked={show} onChange={handleShowPassword} />
          <label>Show password</label>
        </div>
        <div className="flex items-center justify-between">
          <Link
            to="/account/login"
            className="text-blue-500 underline flex items-center justify-center gap-3"
          >
            <FaArrowLeft />
            Back to login
          </Link>
          <input
            className="bg-blue-500 mb-3 cursor-pointer w-[20%] p-3  text-white   rounded"
            type="submit"
            value="Save"
          />
        </div>
      </form>
    </div>
  );
};

export default memo(Register);
