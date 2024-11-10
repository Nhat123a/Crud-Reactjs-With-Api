import React, { Suspense } from "react";
import { Route, Routes } from "react-router";
import { Home } from "./container/Home/home";
import StudentView from "./container/Student/views/studentView";
import Edit from "./container/Student/views/Edit";
import Detail from "./container/Student/views/Detail";
import Create from "./container/Student/views/Create";
import Class from "./container/Class/views/classView";
import CreateClass from "./container/Class/views/create";
import EditClass from "./container/Class/views/edit";
import { Layout } from "./components/theme/layout/layout";
import Login from "./container/account/views/login";
import AccountView from "./container/account/views/layoutAccount";
import Register from "./container/account/views/register";

const Renderrouter = () => {
  return (
    <div>
      <Suspense>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="/student" element={<StudentView />} />
            <Route path="/student/create" element={<Create />} />
            <Route path="/student/detail/:id" element={<Detail />} />
            <Route path="/student/edit/:id" element={<Edit />} />
            <Route path="/Class" element={<Class />}></Route>
            <Route path="/Class/Create" element={<CreateClass />}></Route>
            <Route path="/Class/edit/:id" element={<EditClass />}></Route>
          </Route>

          <Route path="account" element={<AccountView />}>
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
