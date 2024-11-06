import React, { memo, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import { GetstudentById, putApiStudent } from "../API";
import { Link } from "react-router-dom";
import Toast from "../Toast";
const Edit = () => {
  const { id } = useParams();
  console.log(">>>>>>>check StudentID :", id);
  const { register, setValue, handleSubmit, getValues } = useForm();
  const HandleDetail = async (id) => {
    try {
      const res = await GetstudentById(id);
      //   console.log(">>>>>Check res:", res.data);
      const DateFomat = new Date(res.data.dob).toISOString().split("T")[0];

      setValue("name", res.data.name);
      setValue("dob", DateFomat);
      setValue("phoneNumber", res.data.phoneNumber);
      setValue("address", res.data.address);
    } catch (err) {
      console.log(">>>>>>>>Error:", err);
    }
  };
  const HandleEdit = async () => {
    try {
      const data = {
        id: id,
        name: getValues("name"),
        dob: new Date(getValues("dob")).toISOString(),
        phoneNumber: getValues("phoneNumber"),
        address: getValues("address"),
      };
      const res = await putApiStudent(id, data);
      if (res.status === 200) {
        // console.log(">>>>>>>Check:", res.data);
        Toast("success", "Update Successfully");
      }
    } catch (err) {
      console.log(">>>>>>>>Error:", err);
    }
  };
  useEffect(() => {
    HandleDetail(id);
  }, [id, setValue]);
  return (
    <div>
      <div className="container">
        <div className="flex items-center mt-10 justify-center ">
          <div className="bg-white p-7  rounded-md shadow-md w-full max-w-md">
            <div className="text-center font-bold text-2xl">
              <span>Edit Student</span>
            </div>
            <form onSubmit={handleSubmit(HandleEdit)} className="mt-7">
              <input
                {...register("name")}
                placeholder="Name"
                className={`block  mb-3 w-full text-[15px] rounded px-[10px] h-12  border border-[#e6e6e6]
             outline-none`}
              />
              <input
                {...register("phoneNumber")}
                placeholder="Phone"
                className={`block  mb-3 w-full text-[15px] rounded px-[10px] h-12  border border-[#e6e6e6]
                outline-none`}
              />
              <input
                {...register("address")}
                placeholder="address"
                className={`block  mb-3 w-full text-[15px] rounded px-[10px] h-12  border border-[#e6e6e6]
                outline-none`}
              />
              <input
                {...register("dob")}
                placeholder="Ngày sinh"
                type="date"
                className={`block  mb-3 w-full text-[15px] rounded px-[10px] h-12  border border-[#e6e6e6]
                outline-none`}
              />
              <div className="flex items-center justify-center text-center gap-3">
                <button
                  type="submit"
                  className=" bg-blue-600 my-2 w-full cursor-pointer p-2 uppercase   text-white text-base  rounded"
                >
                  Save
                </button>
                <Link
                  to="/student "
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

export default memo(Edit);
