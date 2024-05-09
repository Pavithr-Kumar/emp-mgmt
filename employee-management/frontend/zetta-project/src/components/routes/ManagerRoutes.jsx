import React from "react";
import NotFound from "../pages/NotFound";

const ManagerRoutes = () => {
  return (
    <Routes>
      <Route path="/manager/:id" element={<ManagerHome />} />
      <Route path="/employees" element={<EmployeesList />} />
      <Route path="/employee/:id" element={<EmployeeHome />} />
      <Route path="*" element={<NotFound />}></Route>
      <Route />
      <Route />
      <Route />
      <Route />
    </Routes>
  );
};

export default ManagerRoutes;
