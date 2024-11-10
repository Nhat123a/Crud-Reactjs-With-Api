import React, { memo } from "react";
import { Outlet } from "react-router";
import BeatLoader from "react-spinners/BeatLoader";
import { useLayoutAccount } from "../hooks/useLayout";

const AccountView = () => {
  const { loading } = useLayoutAccount();
  return (
    <div className="bg-blue-400  relative min-h-screen flex justify-center items-center">
      {loading ? (
        <BeatLoader
          cssOverride={override}
          color="#FF8C00"
          loading={loading}
          size={15}
        />
      ) : (
        <Outlet />
      )}
    </div>
  );
};
export default memo(AccountView);
const override = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};
