import React, { useEffect, useState } from "react";

export const HomePage = () => {
  const [user,setUser] = useState('')
  const [userName, setUserName] = useState(null);
  useEffect(()=>{
    const getUser = localStorage.getItem('user')
    if(getUser){
      const users = JSON.parse(getUser)
      setUser(users)
      console.log(">>>>>>>>check data:",user)
    } 
  },[user])
  const parseJwt = (token) =>{
    if(!token) return null
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
        atob(base64)
            .split('')
            .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
            .join('')
    );
    return JSON.parse(jsonPayload);
  }
  useEffect(() => {
    if (user) {
      const result = parseJwt(user);
      if (result && result.UserName) {
        setUserName(result.UserName); 
      }
    }
  }, [user]);
  return (
    <div className="container">
      <div className="flex items-center justify-center mt-10">
        <span className="text-2xl text-blue-300 font-bold">
          {user?`Welcome to ${userName}`:"" }
        </span>
      </div>
    </div>
  );
};
