import React, { Suspense } from "react";
import { HomePage } from "./pages/HomePage";
import { Route, Routes } from "react-router";
import { Layout } from "./pages/theme/Layout";
import Account from "./pages/Account/Layout";
import Login from "./pages/Account/Login";
import Register from "./pages/Account/register";
import Student from "./components/Student";
import Class from "./components/Class";
import Create from "./components/Student/Create";
const Renderrouter = () => {
  // const userRouter = [
  //   {
  //     path: ROUTER.USER.Home,
  //     component: HomePage,
  //   },
  //   {
  //     path: ROUTER.USER.Login,
  //     component: <>hhh</>,
  //   },
  //   {
  //     path: ROUTER.USER.Register,
  //     component: <>hhh</>,
  //   },
  // ];
  return (
    <div>
      <Suspense>
        <Routes>
          {/* {userRouter.map((item, index) => {
            // console.log(item.path);
            // console.log(ROUTER.USER.Login);

            // console.log(item.path === ROUTER.USER.Login);
            return (
              <Route
                key={index}
                path={item.path}
                element={
                  item.path === ROUTER.USER.Login ||
                  item.path === ROUTER.USER.Register ? (
                    <Account>
                      <item.component />
                    </Account>
                  ) : (
                    <Layout>
                      <item.component />
                    </Layout>
                  )
                }
              />
            );
          })} */}
          {/* Layout trang chu */}
          <Route path="/" element={<Layout />}>
            <Route path="" element={<HomePage />} />
            <Route path="/student" element={<Student />} />
            <Route path="/student/create" element={<Create />} />
            <Route path="/Class" element={<Class />} />
          </Route>
          {/* Layout account */}
          <Route path="account" element={<Account />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
          <Route path="*" element={<>ErrorPage</>} />
        </Routes>
      </Suspense>
    </div>
  );
};
const Routercustom = () => {
  return Renderrouter();
};

export default Routercustom;
