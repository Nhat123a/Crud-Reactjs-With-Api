import React from "react";
import { Outlet } from "react-router";

const Account = () => {
  // const location = useLocation();
  // const [active,setActive] = useState(location=)
  return (
    <div className="bg-blue-400  relative min-h-screen flex justify-center items-center">
      <Outlet />
    </div>
  );
};

export default Account;
