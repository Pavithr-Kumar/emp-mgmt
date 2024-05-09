import React, { useRef, useState } from "react";
import "../../css/login.css";

import toast, { Toaster } from "react-hot-toast";
import EmployeeService from "../../../services/employeeService";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const EditEmployee = () => {
  let { state } = useLocation();
  const fisrNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const roleRef = useRef();

  let employee;
  try {
    employee = state.employee;
  } catch (err) {
    navigate("/employees");
  }

  let navigate = useNavigate();
  let user = useSelector((st) => st.userSlice);

  const handleSubmit = async () => {
    const user = {
      firstName: fisrNameRef.current.value,
      lastName: lastNameRef.current.value,
      email: emailRef.current.value,

      roleId: roleRef.current.value,
    };

    return EmployeeService.updateEmployeeByAdmin(user)
      .then((resp) => {
        console.log(resp);
        if (resp.status == 200) {
          setTimeout(() => {
            navigate("/employees");
          }, 1000);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSave = (e) => {
    e.preventDefault();
    toast.promise(handleSubmit(), {
      loading: "Updating User...",
      success: <b>User Updated Successfully!</b>,
      error: <b>Something went wrong</b>,
    });
  };
  return (
    <>
      <div>
        <Toaster />
      </div>

      <div>
        <div className="login-body">
          <div className="login-container">
            <h2>Update User</h2>

            <form className="login-form" onSubmit={handleSave}>
              <div className="error-message"></div>
              <input
                type="text"
                ref={fisrNameRef}
                defaultValue={employee.firstName}
                name="firstName"
                placeholder="first name"
                required
              />
              <input
                type="text"
                ref={lastNameRef}
                defaultValue={employee.lastName}
                name="lastName"
                placeholder="last  name"
                required
              />
              <input
                readOnly
                type="email"
                value={employee.email}
                ref={emailRef}
              />

              <select
                name=""
                id=""
                defaultValue={employee.roleId}
                ref={roleRef}
              >
                {/* <option value="0">
                  SELECT ROLE
                </option> */}
                <option value="3">EMPLOYEE</option>
                <option value="2">MANAGER</option>

                {user.role === "Admin" && (
                  <>
                    {" "}
                    <option value="1">ADMIN</option>
                  </>
                )}
              </select>

              <button type="submit">Update User</button>
              <button
                style={{ backgroundColor: "red", marginTop: 20 }}
                onClick={() => navigate("/employees")}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditEmployee;
