import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate, useParams } from "react-router";
import { Select } from "antd";
import { createClass, getClassById } from "../../../comom/API/api";
import Toast from "../../../components/Toast";
const EditClass = () => {
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const schema = yup.object().shape({
    name: yup.string().required("Name required!"),
  });
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const { id } = useParams();
  const GetClass = async (id) => {
    try {
      const res = await getClassById(id);
      if (res.status === 200) {
        setValue("name", res.data.name);
        setSelectedItems(res.data.studentIds);
        console.log(selectedItems);
      }
    } catch (err) {}
  };
  useEffect(() => {
    GetClass(id);
  }, []);
  const onsubmit = async (data) => {
    try {
      const { name } = data;
      const studentID = selectedItems;
      console.log(studentID);
      const res = await createClass(name, studentID);
      if (res.status === 200) {
        Toast("success", "Edit Successfully");
        navigate("/Class");
      } else {
        Toast("error", "Cannot Edit Student");
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
            <span className="text-2xl">EDIT CLASS</span>
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
              value="Save"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditClass;
