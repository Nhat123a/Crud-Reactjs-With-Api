import React from "react";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";

export const getMenuItems = (props) => [
  {
    key: "1",
    label: "Profile",
    icon: <UserOutlined />,
  },
  {
    key: "2",
    label: "Logout",
    icon: <LogoutOutlined />,
    onClick: props.handleLogout,
  },
];
