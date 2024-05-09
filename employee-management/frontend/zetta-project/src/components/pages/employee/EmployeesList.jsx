import React, { useState } from "react";
import { useSelector } from "react-redux";
import "../../css/employeelist.css";
import EmployeeService from "../../../services/employeeService";
import { FiEdit } from "react-icons/fi";
import { FaEye } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

import { useNavigate } from "react-router-dom";
const EmployeesList = () => {
  let navigate = useNavigate();
  let user = useSelector((st) => st.userSlice);
  let [employees, setEmployees] = useState([]);

  const showAllEmployees = () => {
    let response = EmployeeService.getAllEmployees();
    response
      .then((resp) => {
        if (user.role == "Admin")
          setEmployees(resp.data.sort((a, b) => a.empId - b.empId));
        else
          setEmployees(
            resp.data
              .filter((emp) => emp.roleId !== 1)
              .sort((a, b) => a.empId - b.empId)
          );
        console.log(employees);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDelete = (id) => {
    let response = EmployeeService.deleteEmployeeByAdmin(id);
    response
      .then((resp) => {
        if (resp.status == 200) showAllEmployees();
        navigate("/employees");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="employee-list-container">
      <h2 className="heading">Employees</h2>
      <button className="show-all-button" onClick={() => showAllEmployees()}>
        Show All
      </button>
      <button
        style={{ marginLeft: 30, backgroundColor: "green" }}
        className="show-all-button"
        onClick={() => navigate("/employee/add")}
      >
        Add New
      </button>
      <table className="employee-table">
        <thead>
          <tr>
            <th>Emp Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Roles</th>
            <th>Status</th>
            <th>Edit</th>
            <th>View</th>
            {user && user.role == "Admin" && <th>Delete</th>}
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.empId}>
              <td>ZM-{employee.empId}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>
                {employee.roleId == 1 ? (
                  <span>Admin, Manager, Employee</span>
                ) : employee.roleId == 2 ? (
                  <span>Manager, Employee</span>
                ) : (
                  <span>Employee</span>
                )}
              </td>
              <td>
                {employee.loginStatus === 0 ? (
                  <span style={{ color: "red" }}>Inactive</span>
                ) : (
                  <span style={{ color: "green" }}>Active</span>
                )}
              </td>
              <td>
                <button
                  onClick={() => {
                    navigate("/employee/edit/" + employee.empId, {
                      state: { employee },
                    });
                  }}
                  className="edit-button"
                >
                  <FiEdit />
                </button>
              </td>
              <td>
                <button
                  style={{ backgroundColor: "blue" }}
                  onClick={() => {
                    navigate("/employee/" + employee.empId, {
                      state: { employee: employee },
                    });
                  }}
                  className="view-button"
                >
                  <FaEye />
                </button>
              </td>
              {user && user.role == "Admin" && (
                <td>
                  <button
                    style={{ backgroundColor: "red" }}
                    onClick={() => {
                      handleDelete(employee.empId);
                    }}
                    className="view-button"
                  >
                    <MdDelete />
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeesList;
