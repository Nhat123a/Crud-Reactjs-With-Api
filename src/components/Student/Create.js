import React from "react";
import Toast from "../Toast";
import { CreateStudent } from "../API";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router";

const Create = () => {
  const navigate = useNavigate();
  const schema = yup.object().shape({
    name: yup.string().required("Name required!"),
    dob: yup
      .date()
      .required("dob required")
      .typeError("Format required: YYYY-MM-DD"),
    phoneNumber: yup
      .string() // Thay đổi từ .number() thành .string()
      .required("Phone required!")
      .matches(/^\d{10}$/, "Phone number must be exactly 10 digits"),
    address: yup.string().required("Address required!"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onsubmit = async (data) => {
    const { name, phoneNumber, address, dob } = data;
    const res = await CreateStudent(name, phoneNumber, address, dob);
    if (res.status === 200) {
      console.log(">>>>>check :", res);
      Toast("success", "Create Successfully");
      setTimeout(() => {
        navigate("/student");
      }, 3000);
    } else {
      Toast("error", "Cannot create Student");
    }
  };
  return (
    <>
      <div className="container">
        <div className="flex items-center mt-10 justify-center ">
          <div className="bg-white p-7  rounded-md shadow-md w-full max-w-md">
            <div className="text-center">
              <span className="text-2xl">CREATE STUDENT</span>
            </div>
            {/* Form */}
            <form onSubmit={handleSubmit(onsubmit)} className="mt-7">
              <input
                {...register("name")}
                placeholder="Name"
                className={`block  mb-3 w-full text-[15px] rounded px-[10px] h-12  border ${
                  errors.name ? "border-red-500" : "border-[#e6e6e6]"
                } outline-none`}
              />
              <input
                {...register("phoneNumber")}
                placeholder="Phone"
                className={`block  mb-3 w-full text-[15px] rounded px-[10px] h-12  border ${
                  errors.phoneNumber ? "border-red-500" : "border-[#e6e6e6]"
                } outline-none`}
              />
              <input
                {...register("address")}
                placeholder="address"
                className={`block  mb-3 w-full text-[15px] rounded px-[10px] h-12  border ${
                  errors.address ? "border-red-500" : "border-[#e6e6e6]"
                } outline-none`}
              />
              <input
                {...register("dob")}
                placeholder="Ngày sinh"
                type="date"
                className={`block  mb-3 w-full text-[15px] rounded px-[10px] h-12  border ${
                  errors.dob ? "border-red-500" : "border-[#e6e6e6]"
                } outline-none`}
              />
              <input
                className="bg-blue-500 my-3 cursor-pointer w-full p-3   text-white text-xl  rounded"
                type="submit"
                value="Create"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Create;
