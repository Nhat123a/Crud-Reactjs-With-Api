import React from "react";
import { Select } from "antd";
import useClass from "../hooks/useClas";
import { getAllStudent } from "../../../comom/API/api";

const CreateClass = () => {
  const {
    handleSubmit,
    register,
    onsubmit,
    students,
    selectedItems,
    setSelectedItems,
    errors,
  } = useClass({ getDataStudent: getAllStudent });
  return (
    <div className="container">
      <div className="flex items-center mt-10 justify-center ">
        <div className="bg-white p-7  rounded-md shadow-md w-full max-w-md">
          <div className="text-center">
            <span className="text-2xl">CREATE CLASS</span>
          </div>
          {/* Form */}
          <form onSubmit={handleSubmit(onsubmit)} className="mt-7">
            <input
              {...register("name")}
              placeholder="Class Name"
              className={`block  mb-3 w-full text-[15px] rounded px-[10px] h-12  border ${
                errors.name ? "border-red-500" : "border-[#e6e6e6]"
              } outline-none`}
            />
            <Select
              mode="multiple"
              placeholder="Please select students"
              value={selectedItems}
              onChange={setSelectedItems}
              style={{ width: "100%", height: "3rem" }}
              options={students.map((student) => ({
                value: student.id,
                label: student.name,
              }))}
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
  );
};

export default CreateClass;
