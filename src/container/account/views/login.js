import React, { memo } from "react";
import { Link } from "react-router-dom";
import { _useLogin } from "../hooks/useLogin";
const Login = () => {
  const {
    show,
    password,
    handleShowPassword,
    setPassword,
    handleSubmit,
    register,
    errors,
    onsubmitForm,
    isLoading,
  } = _useLogin();

  return (
    <div className="bg-white   p-7 rounded-md shadow-md w-full max-w-md">
      <div className="text-center">
        <span className="text-2xl">Please sign in</span>
      </div>
      {/* Form */}
      <form onSubmit={handleSubmit(onsubmitForm)} className="mt-7">
        <input
          {...register("username")}
          placeholder="UserName"
          className={`block  mb-3 w-full text-[15px] rounded px-[10px] h-12  border ${
            errors.username ? "border-red-500" : "border-[#e6e6e6]"
          } outline-none`}
          autocomplete="username"
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
          autocomplete="password"
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
          disabled={isLoading}
          className="bg-blue-500 mb-3 cursor-pointer w-full p-3   text-white text-xl  rounded"
          type="submit"
          value="Sign in"
        />
        <div className="w-full my-5 border-b border-gray-300 "></div>
      </form>
    </div>
  );
};

export default memo(Login);
