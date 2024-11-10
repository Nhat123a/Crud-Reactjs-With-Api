import React from "react";
import { Link } from "react-router-dom";
export const DataStudent = ({
  register,
  readOnly = true,
  type,
  url,
  onSubmit,
  errors={}
}) => {
  const title =
    type === "detail"
      ? "Infomation Student"
      : type === "edit"
      ? "Edit student"
      : "Create Student";
  return (
    <div>
      <div className="container">
        <div className="flex items-center mt-10 justify-center ">
          <div className="bg-white p-7  rounded-md shadow-md w-full max-w-md">
            <div className="text-center font-bold text-2xl">
              <span>{title}</span>
            </div>
            <form className="mt-7" onSubmit={onSubmit}>
              <input
                {...register("name")}
                placeholder="Name"
                readOnly={readOnly}
                className={`block  mb-3 w-full text-[15px] rounded px-[10px] h-12  border ${
                  errors.name ? "border-red-500" : "border-[#e6e6e6]"
                } outline-none`}
              />
              <input
                {...register("phoneNumber")}
                placeholder="Phone"
                readOnly={readOnly}
                className={`block  mb-3 w-full text-[15px] rounded px-[10px] h-12  border ${
                  errors.phoneNumber ? "border-red-500" : "border-[#e6e6e6]"
                } outline-none`}
              />
              <input
                {...register("address")}
                placeholder="address"
                readOnly={readOnly}
                className={`block  mb-3 w-full text-[15px] rounded px-[10px] h-12  border ${
                  errors.address ? "border-red-500" : "border-[#e6e6e6]"
                } outline-none`}
              />
              <input
                {...register("dob")}
                placeholder="Ngày sinh"
                type="date"
                readOnly={readOnly}
                className={`block  mb-3 w-full text-[15px] rounded px-[10px] h-12  border ${
                  errors.dob ? "border-red-500" : "border-[#e6e6e6]"
                } outline-none`}
              />
              <div className="flex items-center justify-center text-center gap-3">
                {type !== "detail" && (
                  <button
                    type="submit"
                    className="bg-blue-500 w-full my-2 cursor-pointer p-2 uppercase text-white text-base rounded"
                  >
                    {type === "edit" ? "Save" : "Create"}
                  </button>
                )}
                {type === "detail" && (
                  <Link
                    to={url}
                    className="bg-blue-500 w-full my-2 cursor-pointer  p-2 uppercase   text-white text-base  rounded"
                  >
                    Edit
                  </Link>
                )}
                <Link
                  to="/student"
                  className="bg-red-600 my-2 w-full cursor-pointer p-2 uppercase   text-white text-base  rounded"
                >
                  Back
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
