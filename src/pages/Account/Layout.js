import React, { memo, useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router";
import BeatLoader from "react-spinners/BeatLoader";

const Account = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  // const [active,setActive] = useState(location=)
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [location]);
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

export default memo(Account);
const override = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};
