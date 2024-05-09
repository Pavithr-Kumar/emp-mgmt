import React from "react";
import { Route, Routes } from "react-router-dom";
import EmployeeHome from "../pages/employee/EmployeeHome";
import NotFound from "../pages/NotFound";
const EmployeeRoutes = () => {
  return (
    <Routes>
      <Route path="/employee/:id" element={<EmployeeHome />} />
      <Route path="*" element={<NotFound />}></Route>
      <Route />
      <Route />
      <Route />
      <Route />
    </Routes>
  );
};

export default EmployeeRoutes;
