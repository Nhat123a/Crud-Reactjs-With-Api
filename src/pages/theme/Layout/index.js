import React, { useEffect, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Outlet, useLocation } from "react-router";
import BeatLoader from "react-spinners/BeatLoader";
import AppBreadcrumb from "../../../components/Breadcrum";
export const Layout = ({ ...prop }) => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [location]);
  return (
    <div {...prop} className="relative min-h-screen">
      {loading ? (
        <BeatLoader
          cssOverride={override}
          color="#7B68EE"
          loading={loading}
          size={15}
        />
      ) : (
        <>
          <Header></Header>
          <AppBreadcrumb />
          <Outlet />
          <Footer />
        </>
      )}
    </div>
  );
};
const override = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};
