import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      {" "}
      <nav className="bg-white border-gray-200 dark:bg-blue-500 dark:border-blue-500">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Student
            </span>
          </Link>

          <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-blue-500 dark:border-blue-500">
              <li className="text-white">
                <Link to='/student'>Student List</Link>
              </li>
              <li className="text-white">
                <Link to="/Class">Class List</Link>
              </li>
              <li className="text-white">
                {/* <Link className="flex items-center gap-1 relative">
                  User <FaCaretDown></FaCaretDown>
                  <ul className="bg-gray-200 text-center text-gray-900  font-normal rounded absolute left-0 top-7">
                    <li className="py-3 px-5 border-b-gray-50 border-b">
                      <Link>Profile</Link>
                    </li>
                    <li className="p-3">
                      <Link>Logout</Link>
                    </li>
                  </ul>
                </Link> */}
                <Link> Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
