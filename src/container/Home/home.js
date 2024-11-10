import { useSelector } from "react-redux";

export const Home = () => {
  const currentUser = useSelector((state) => state.auth.currentUser);
  return (
    <div className="container">
      <div className="flex items-center justify-center mt-10">
        <span className="text-2xl text-blue-300 font-bold">
          {currentUser
            ? `Welcome to ${currentUser}`
            : // : googleName
              // ? `Welcome to ${googleName}`
              "Please Login Now"}
        </span>
      </div>
    </div>
  );
};
