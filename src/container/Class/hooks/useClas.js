import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { schemaCLass } from "../Validation";
import Toast from "../../../components/Toast";
import { useNavigate } from "react-router";
import { createClass } from "../../../comom/API/api";

const useClass = ({getDataStudent}) => {
  const [students, setStudents] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const navigate =useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaCLass),
  });

  const getStudent = async () => {
    try {
      const res = await getDataStudent();
      if (res.status === 200) {
        setStudents(res.data);
      }
    } catch (err) {
      console.log(">>>>>>Error:", err);
    }
  };
  useEffect(() => {
    getStudent();
  }, []);
  const onsubmit = async (data) => {
    try {
      const { name } = data;
      const studentID = selectedItems;
      const res = await createClass(name, studentID);
      if (res.status === 200) {
        Toast("success", "Create Successfully");
        navigate("/Class");
      } else {
        Toast("error", "Cannot create Student");
      }
    } catch (err) {
      console.log(">>>>>>err:", err);
    }
  };
  return {
    students,
    selectedItems,
    setSelectedItems,
    register,
    handleSubmit,
    errors,
    onsubmit
  }
};

export default useClass;
