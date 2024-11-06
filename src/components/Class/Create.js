import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Toast from "../Toast";
import { useNavigate } from "react-router";
import { CreateClassAPI, getStudentAPI } from "../API";
import { Select } from "antd";
import { data } from "autoprefixer";

const CreateClass = () => {
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  const schema = yup.object().shape({
    name: yup.string().required("Name required!"),
  });
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const getStudent = async () => {
    try {
      const res = await getStudentAPI();
      if (res.status === 200) {
        setStudents(res.data);
        // console.log(students)
      }
    } catch (err) {
      console.log(">>>>>>Error:", err);
    }
  };
  useEffect(() => {
    getStudent();
  }, []);
  //   const [selectedItems, setSelectedItems] = useState([]);
  //   const filteredOptions = OPTIONS.filter((x) => !selectedItems.includes(x));
  const onsubmit = async (data) => {
    try {
      const { name } = data;
      const studentID = selectedItems;
    //   console.log(studentID);
    //   console.log(name);
      const res = await CreateClassAPI(name, studentID);
      if (res.status === 200) {
        console.log(">>>>>check :", res);
        Toast("success", "Create Successfully");
        navigate("/Class");
      } else {
        Toast("error", "Cannot create Student");
      }
    } catch (err) {
      console.log(">>>>>>err:", err);
    }
  };
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
