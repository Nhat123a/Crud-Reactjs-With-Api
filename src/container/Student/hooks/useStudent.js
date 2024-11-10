import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import Toast from "../../../components/Toast";
import { createStudent, updateStudent } from "../../../comom/API/api";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../Validation/validation";
export const useStudent = (props) => {
  const { getDataByID } = props;
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    register,
    setValue,
    getValues,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const loadData = async (id) => {
    try {
      const res = await getDataByID(id);
      const DateFomat = new Date(res.data.dob).toISOString().split("T")[0];
      setValue("name", res.data.name);
      setValue("dob", DateFomat);
      setValue("phoneNumber", res.data.phoneNumber);
      setValue("address", res.data.address);
    } catch (err) {
      console.log(">>>>>>>>Error:", err);
    }
  };
  const handleEdit = async () => {
    try {
      const data = {
        id: id,
        name: getValues("name"),
        dob: new Date(getValues("dob")).toISOString(),
        phoneNumber: getValues("phoneNumber"),
        address: getValues("address"),
      };
      const res = await updateStudent(id, data);
      if (res.status === 200) {
        Toast("success", "Update Successfully");
      }
    } catch (err) {
      console.log(">>>>>>>>Error:", err);
    }
  };
  //Create
  const onsubmit = async (data) => {
    const { name, phoneNumber, address, dob } = data;
    const res = await createStudent(name, phoneNumber, address, dob);
    if (res.status === 200) {
      // console.log(">>>>>check :", res);
      Toast("success", "Create Successfully");
      navigate("/student");
    } else {
      Toast("error", "Cannot create Student");
    }
  };
  useEffect(() => {
    if (id) {
      loadData(id);
    } else {
      reset({
        name: "",
        dob: "",
        phoneNumber: "",
        address: "",
      });
    }
  }, [id, setValue, reset]);
  return {
    handleSubmit,
    register,
    id,
    handleEdit,
    onsubmit,
    errors,
  };
};
