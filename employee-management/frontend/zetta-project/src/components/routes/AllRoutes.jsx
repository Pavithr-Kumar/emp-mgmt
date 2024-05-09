import React, { useContext } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import SignUpPage from "../SignUpPage";
import LoginPage from "../LoginPage";
import Home from "../pages/Home";
import UpdatePass from "../pages/UpdatePass";

import ForgotPass from "../pages/ForgotPass";
import NotFound from "../pages/NotFound";

import EmployeeHome from "../pages/employee/EmployeeHome";
import EmployeesList from "../pages/employee/EmployeesList";
import ManagerHome from "../pages/manager/ManagerHome";
import ManagersList from "../pages/manager/ManagersList";

import { useSelector } from "react-redux";
import Profile from "../pages/Profile";
import AddEmployee from "../pages/employee/AddEmployee";
import EditEmployee from "../pages/employee/EditEmployee";
import ContactPage from "../ContactPage";
export const AllRoutes = () => {
  let user = useSelector((st) => st.userSlice);

  return (
    <>
      <Routes>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" index element={<LoginPage />} />
        <Route path="/home" element={<Home />}></Route>
        <Route path="/" element={<Home />}></Route>

        <Route path="/update-pass" element={<UpdatePass />} />

        <Route path="/forgot-pass" element={<ForgotPass />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />}></Route>
        {user && user.role && (
          <>
            {user.role === "Admin" && (
              <>
                <Route path="/admin/managers" element={<ManagersList />} />
                <Route path="/admin/manager/:id" element={<ManagerHome />} />
                <Route path="employees" element={<EmployeesList />} />
                <Route path="employee/:id" element={<EmployeeHome />} />
                <Route path="employee/add" element={<AddEmployee />} />
                <Route path="employee/edit/:id" element={<EditEmployee />} />
              </>
            )}
            {user.role === "Manager" && (
              <>
                {" "}
                <Route path="/manager/:id" element={<ManagerHome />} />
                <Route path="employees" element={<EmployeesList />} />
                <Route path="employee/:id" element={<EmployeeHome />} />
                <Route path="employee/add" element={<AddEmployee />} />
                <Route path="employee/edit/:id" element={<EditEmployee />} />
                <Route />
                <Route />
                <Route />
                <Route />
              </>
            )}
            {user.role === "Employee" && (
              <>
                <Route path="/employee/:id" element={<EmployeeHome />} />

                <Route />
                <Route />
                <Route />
              </>
            )}
          </>
        )}
      </Routes>
    </>
  );
};
