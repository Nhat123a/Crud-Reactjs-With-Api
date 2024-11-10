import React from "react";
import { Link } from "react-router-dom";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space, Menu } from "antd";
import {} from "@react-oauth/google";
import { getMenuItems } from "./constant";
import { useHeaders } from "../hooks/useHeader";
const Headers = () => {
  const { handleLogout, currentUser } = useHeaders();
  const menu = <Menu items={getMenuItems({ handleLogout })} />;
  return (
    <>
      {" "}
      <nav className="bg-white border-gray-200 dark:bg-blue-500 dark:border-blue-500">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to=""
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Student
            </span>
          </Link>

          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-dropdown"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-blue-500 dark:border-blue-500">
              <li className="text-white">
                {currentUser ? (
                  <div className="flex gap-7 items-center">
                    <Link to="/student">Student List</Link>
                    <Link to="/Class">Class List</Link>
                  </div>
                ) : (
                  <></>
                )}
              </li>
              <li className="text-white">
                {currentUser ? (
                  <Link onClick={(e) => e.preventDefault()}>
                    <Dropdown overlay={menu} trigger={["click"]}>
                      <Space>
                        {currentUser}
                        <DownOutlined />
                      </Space>
                    </Dropdown>
                  </Link>
                ) : (
                  <Link to="/account/login">Login</Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Headers;
