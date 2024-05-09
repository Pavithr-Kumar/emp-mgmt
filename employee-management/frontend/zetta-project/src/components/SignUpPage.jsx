import React, { useContext, useState } from "react";
import LoginService from "../services/LoginService";
import { useNavigate } from "react-router-dom";
// import { loginContext } from "../App";
import toast, { Toaster } from "react-hot-toast";

const SignUpPage = () => {
  //let { status, setStatus } = useContext(loginContext);
  let [errMsg, setErrMsg] = useState("");

  let [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    roleId: 0,
  });

  let navigate = useNavigate();

  const handleSubmit = () => {
    return LoginService.createUser(user)

      .then(() => {
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      })
      .catch((err) => {
        if (err.response.status == 409)
          setErrMsg("Email is Already in Use, Try with different email");
      });
  };

  const handleSave = (e) => {
    e.preventDefault();
    toast.promise(handleSubmit(), {
      loading: "Registering...",
      success: <b>Registered, Email sent Successfully!</b>,
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
            <h2>Sign Up</h2>
            <span>{errMsg}</span>
            <form className="login-form" onSubmit={handleSave}>
              <div className="error-message"></div>
              <input
                type="text"
                value={user.firstName}
                onChange={(e) =>
                  setUser({
                    ...user,
                    firstName: e.target.value,
                  })
                }
                name="firstName"
                placeholder="first name"
                required
              />
              <input
                type="text"
                value={user.lastName}
                onChange={(e) =>
                  setUser({
                    ...user,
                    lastName: e.target.value,
                  })
                }
                name="lastName"
                placeholder="last  name"
                required
              />
              <input
                type="email"
                value={user.email}
                onChange={(e) =>
                  setUser({
                    ...user,
                    email: e.target.value,
                  })
                }
                name="email"
                placeholder="Email"
                required
              />

              <select
                name=""
                id=""
                value={user.roleId}
                onChange={(e) =>
                  setUser({
                    ...user,
                    roleId: e.target.value,
                  })
                }
              >
                {/* <option value="0">
                  SELECT ROLE
                </option> */}
                <option value="3">EMPLOYEE</option>
                <option value="1">ADMIN</option>

                <option value="2">MANAGER</option>
              </select>

              <button type="submit">Sign Up</button>
              <p>Account Created ? Login Here</p>
              <button
                onClick={() => {
                  setErrMsg("");
                  navigate("/login");
                }}
              >
                Log In
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
