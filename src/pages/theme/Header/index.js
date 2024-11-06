import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DownOutlined, UserOutlined, LogoutOutlined } from "@ant-design/icons";
import { Dropdown, Space, Menu } from "antd";
import { jwtDecode } from "jwt-decode";
import { googleLogout } from "@react-oauth/google";
const Header = () => {
  const navigate = useNavigate();
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
  const handleLogout = () => {
    if (user) {
      localStorage.removeItem("user");
    } else {
      localStorage.removeItem("google_token");
      googleLogout()
    }
    navigate("/account/login");
  };
  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: "Profile",
          extra: <UserOutlined />,
        },
        {
          key: "2",
          label: "Logout",
          extra: <LogoutOutlined />,
          onClick: handleLogout,
        },
      ]}
    />
  );
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
                {user ? (
                  <div className="flex gap-7 items-center">
                    <Link to="/student">Student List</Link>
                    <Link to="/Class">Class List</Link>
                  </div>
                ) : googleName ? (
                  <div className="flex gap-7 items-center">
                    <Link to="/student">Student List</Link>
                    <Link to="/Class">Class List</Link>
                  </div>
                ) : (
                  <></>
                )}
              </li>

              <li className="text-white">
                {user ? (
                  <Link onClick={(e) => e.preventDefault()}>
                    <Dropdown overlay={menu} trigger={["click"]}>
                      <Space>
                        {user
                          ? `${userName}`
                          : googleName
                          ? `${googleName}`
                          : "Account"}
                        <DownOutlined />
                      </Space>
                    </Dropdown>
                  </Link>
                ) : googleName ? (
                  <Link onClick={(e) => e.preventDefault()}>
                    <Dropdown overlay={menu} trigger={["click"]}>
                      <Space>
                        {user
                          ? `${userName}`
                          : googleName
                          ? `${googleName}`
                          : "Account"}
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

export default Header;
