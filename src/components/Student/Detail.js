import React, { memo, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import { GetstudentById } from "../API";
import { Link } from "react-router-dom";
const Detail = () => {
  const { id } = useParams();
  //   console.log(">>>>>>>check StudentID :", id);
  const { register, setValue } = useForm();
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
  useEffect(() => {
    HandleDetail(id);
  }, [id, setValue]);
  return (
    <div>
      <div className="container">
        <div className="flex items-center mt-10 justify-center ">
          <div className="bg-white p-7  rounded-md shadow-md w-full max-w-md">
            <div className="text-center font-bold text-2xl">
              <span>Infomation Student</span>
            </div>
            <form className="mt-7">
              <input
                {...register("name")}
                placeholder="Name"
                readOnly
                className={`block  mb-3 w-full text-[15px] rounded px-[10px] h-12  border border-[#e6e6e6]
             outline-none`}
              />
              <input
                {...register("phoneNumber")}
                placeholder="Phone"
                readOnly
                className={`block  mb-3 w-full text-[15px] rounded px-[10px] h-12  border border-[#e6e6e6]
                outline-none`}
              />
              <input
                {...register("address")}
                placeholder="address"
                readOnly
                className={`block  mb-3 w-full text-[15px] rounded px-[10px] h-12  border border-[#e6e6e6]
                outline-none`}
              />
              <input
                {...register("dob")}
                placeholder="Ngày sinh"
                type="date"
                readOnly
                className={`block  mb-3 w-full text-[15px] rounded px-[10px] h-12  border border-[#e6e6e6]
                outline-none`}
              />
              <div className="flex items-center justify-center text-center gap-3">
                <Link
                  to={`/student/edit/${id}`}
                  className="bg-blue-500 w-full my-2 cursor-pointer  p-2 uppercase   text-white text-base  rounded"
                >
                  Edit
                </Link>
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

export default memo(Detail);
