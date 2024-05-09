import React from "react";
import { Route, Routes } from "react-router-dom";

import ManagerHome from "../pages/manager/ManagerHome";
import EmployeeHome from "../pages/employee/EmployeeHome";
import ManagersList from "../pages/manager/ManagersList";
import EmployeesList from "../pages/employee/EmployeesList";
import NotFound from "../pages/NotFound";

const AdminRoutes = () => {
  return (
    <>
      <Route path="/admin/managers" element={<ManagersList />} />
      <Route path="/admin/manager/:id" element={<ManagerHome />} />
      <Route path="/employees" element={<EmployeesList />} />
      <Route path="/employee/:id" element={<EmployeeHome />} />
      <Route path="*" element={<NotFound />}></Route>

      <Route />
      <Route />
      <Route />
    </>
  );
};

export default AdminRoutes;
