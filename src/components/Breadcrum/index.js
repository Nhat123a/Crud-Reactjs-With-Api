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
    ...__path
      .map((path, index) => {
        const url = `/${__path.slice(0, index + 1).join("/")}`;
        const isLast = index === __path.length - 1;
        const breadcrumbName = breadcrumbNameMap[url];
        if (breadcrumbName) {
          return {
            title: isLast ? (
              breadcrumbName
            ) : (
              <Link to={url}>{breadcrumbName}</Link>
            ),
          };
        }
        return null; 
      })
      .filter(Boolean), 
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
