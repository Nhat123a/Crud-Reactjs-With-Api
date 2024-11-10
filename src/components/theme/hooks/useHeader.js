import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import {
  logout,
  setCurrentUser,
} from "../../../redux/slice/account/accountSlice";

export const useHeaders = () => {
  const dispatch = useDispatch();
  const naviagte = useNavigate();
  const currentUser = useSelector((state) => state.auth.currentUser);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodeJWT = jwtDecode(token);
        dispatch(setCurrentUser(decodeJWT.UserName));
      } catch (error) {
        console.log(">>>>>>Error:", error);
      }
    }
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logout);
    naviagte("/account/login");
  };
  return {
    handleLogout,
    currentUser,
  };
};
