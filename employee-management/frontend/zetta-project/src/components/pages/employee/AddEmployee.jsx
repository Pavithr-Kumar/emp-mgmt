import React, { useRef, useState } from "react";
import "../../css/login.css";
import LoginService from "../../../services/LoginService";
import toast, { Toaster } from "react-hot-toast";
import EmployeeService from "../../../services/employeeService";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const AddEmployee = () => {
  let [email, setEmail] = useState("");

  const fisrNameRef = useRef();
  const lastNameRef = useRef();
  const passRef = useRef();
  const roleRef = useRef();
  const buttonref = useRef();
  const statusref = useRef();

  let navigate = useNavigate();
  let user = useSelector((st) => st.userSlice);

  const verifyEmail = () => {
    let response = LoginService.verifyEmail(email);
    response
      .then((resp) => {
        if (resp.status == 200) {
          //setErrMsg("Email already in use,try with different email");
          toast.error("Email already in use,try with different email");
          buttonref.current.disabled = true;
        }
      })
      .catch((err) => {
        buttonref.current.disabled = false;
        toast.success("Email is Valid");
      });
  };

  const handleClick = () => {
    if (buttonref.current.disabled == true)
      toast.error("Email already in use,try with different email");
  };

  const handleSubmit = async () => {
    const user = {
      firstName: fisrNameRef.current.value,
      lastName: lastNameRef.current.value,
      email: email,
      password: passRef.current.value,
      roleId: roleRef.current.value,
    };

    return EmployeeService.saveEmployeeByAdmin(user)
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
      loading: "Creating User...",
      success: <b>User Created Successfully!</b>,
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
            <h2>Create User</h2>

            <form className="login-form" onSubmit={handleSave}>
              <div className="error-message"></div>
              <input
                type="text"
                ref={fisrNameRef}
                name="firstName"
                placeholder="first name"
                required
              />
              <input
                type="text"
                ref={lastNameRef}
                name="lastName"
                placeholder="last  name"
                required
              />
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                onBlur={() => verifyEmail()}
                name="email"
                placeholder="Email"
                required
              />
              <input
                type="password"
                ref={passRef}
                name="password"
                placeholder="password"
                required
              />

              <select name="" id="" ref={roleRef}>
                {/* <option value="0">
                  SELECT ROLE
                </option> */}
                <option value="3">EMPLOYEE</option>

                {user.role === "Admin" && <option value="2">MANAGER</option>}
              </select>

              <button onClick={handleClick} ref={buttonref} type="submit">
                Create User
              </button>
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

export default AddEmployee;
