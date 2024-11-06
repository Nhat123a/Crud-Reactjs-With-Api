import React from "react";
import { Breadcrumb } from "antd";
import { Link, useLocation } from "react-router-dom";

const breadcrumbNameMap = {
  "/": "Home",
  "/student": "Student List",
  "/student/create": "Create Student",
  "/student/detail": "Detail",
  "/student/edit": "Edit",
  "/Class": "Class List",
  "/Class/Create": "Create",
  "/account/login": "Login",
  "/account/register": "Register",
};

const AppBreadcrumb = () => {
  const location = useLocation();
  const __path = location.pathname.split("/").filter((i) => i);
  if (location.pathname === "/") return null;
  const Items = [
    {
      title: <Link to="/">Home</Link>,
    },
    ...__path.map((_, index) => {
      const url = `/${__path.slice(0, index + 1).join("/")}`;
      return {
        title: breadcrumbNameMap[url] ? (
          <Link to={url}>{breadcrumbNameMap[url]}</Link>
        ) : (
          "Not Find"
        ),
      };
    }),
  ];

  return (
    <>
      <div className="container ">
        <div className="my-4 font-bold text-xl">
          <Breadcrumb items={Items} />
        </div>
      </div>
    </>
  );
};

export default AppBreadcrumb;
