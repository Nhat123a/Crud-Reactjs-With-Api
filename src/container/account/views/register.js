import React, { memo, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { yupResolver } from "@hookform/resolvers/yup";
import Toast from "../../../components/Toast";
import { registerApi } from "../../../comom/API/api";

const Register = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const handleShowPassword = (e) => {
    setShow(e.target.checked);
  };


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(),
  });

  const onsubmit = async (data) => {
    try {
      const { name, email, username, password, passwordConfirm } = data;
      const role = "";
      const res = await registerApi(
        name,
        email,
        username,
        password,
        passwordConfirm,
        role
      );
      if (res.status === 200) {
        navigate("/account/login");
        Toast("success", "Register Success");
      }
    } catch (err) {
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
