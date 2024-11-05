import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Outlet } from "react-router";

export const Layout = ({ ...prop }) => {
  return (
    <div {...prop} className="relative min-h-screen">
      <Header></Header>
      <Outlet />
      <Footer />
    </div>
  );
};
