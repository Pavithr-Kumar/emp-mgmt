import React from "react";
import Profile from "../Profile";
import { useLocation } from "react-router-dom";

const EmployeeHome = () => {
  let { state } = useLocation();
  let employee = state.employee;

  return (
    <div>
      <Profile employee={employee} />
    </div>
  );
};

export default EmployeeHome;
