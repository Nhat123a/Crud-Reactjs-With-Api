import React from "react";
import { Outlet } from "react-router";
import BeatLoader from "react-spinners/BeatLoader";
import AppBreadcrumb from "../../../components/Breadcrum";
import { useLayouts } from "../hooks/useLayout";
import Headers from "../header/Header";
export const Layout = ({ ...prop }) => {
  const { loading } = useLayouts();
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
          <Headers></Headers>
          <AppBreadcrumb />
          <Outlet />
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
