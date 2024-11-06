import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from "react";

export const HomePage = () => {
  const [user, setUser] = useState("");
  const [userName, setUserName] = useState(null);
  const [googleName, setGoogleName] = useState(null);

  useEffect(() => {
    const getUser = localStorage.getItem("user");
    if (getUser) {
      const users = JSON.parse(getUser);
      setUser(users);
      // console.log(">>>>>>>>check data:",user)
    }
    // Google
    const googleToken = localStorage.getItem("google_token");
    if (googleToken) {
      const decodedGoogleToken = jwtDecode(googleToken);
      if (decodedGoogleToken && decodedGoogleToken.name) {
        setGoogleName(decodedGoogleToken.name);
      }
    }
  }, []);

  useEffect(() => {
    if (user) {
      const result = jwtDecode(user);
      if (result && result.UserName) {
        setUserName(result.UserName);
      }
    }
  }, [user]);
  return (
    <div className="container">
      <div className="flex items-center justify-center mt-10">
        <span className="text-2xl text-blue-300 font-bold">
          {user
            ? `Welcome to ${userName}`
            : googleName
            ? `Welcome to ${googleName}`
            : "Please Login Now"}
        </span>
      </div>
    </div>
  );
};
