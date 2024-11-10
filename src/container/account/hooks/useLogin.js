import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaLogin } from "../validation/formValidation";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { loginAsync } from "../../../redux/slice/account/accountSlice";
import Toast from "../../../components/Toast";

export const _useLogin = () => {
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoading = useSelector((state) => state.auth.isLoading);
  const handleShowPassword = (e) => {
    setShow(e.target.checked);
  };
  const onsubmitForm = async (data) => {
    const result = await dispatch(loginAsync(data));
    if (result.type === "user/login/fulfilled") {
      Toast("success", "Login successful");
      navigate("/");
    } else {
      Toast("error", "Login Failed", "Username or password is incorrect");
      navigate("/account/login");
    }
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schemaLogin) });
  return {
    show,
    password,
    handleShowPassword,
    setPassword,
    handleSubmit,
    register,
    errors,
    onsubmitForm,
    isLoading,
  };
};
