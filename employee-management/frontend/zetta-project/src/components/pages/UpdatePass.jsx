import React, { useContext, useRef, useState } from "react";
import "../css/header.css";

import LoginService from "../../services/LoginService";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

const UpdatePass = () => {
  let navigate = useNavigate();
  const [newPassword, setNewPassword] = useState("");

  let [errMsg, setErrMsg] = useState("");
  let user = useSelector((st) => st.userSlice);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (errMsg === "") {
      const response = LoginService.updatePassword({
        ...user,
        password: newPassword,
        loginStatus: 1,
      });

      response
        .then((res) => {
          toast.success("Updated Successfully");
          setTimeout(() => {
            navigate("/home");
          }, 1000);
        })
        .catch((err) => {
          alert(err);
        });
    }
  };

  const passRef = useRef();
  return (
    <>
      <div>
        <Toaster />
      </div>
      <div className="login-body ">
        <div className="login-container">
          <h2>Update Password</h2>

          <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
            <div className="error-message">
              <p style={{ color: "red" }}>{errMsg}</p>
            </div>
            <input
              ref={passRef}
              type="password"
              name="password"
              placeholder="password"
              required
            />
            <input
              value={newPassword}
              onChange={(e) => {
                setNewPassword(e.target.value);
                if (passRef.current.value !== e.target.value)
                  setErrMsg("Passwords are not matching");
                else {
                  setErrMsg("");
                }
              }}
              type="password"
              name="password"
              placeholder=" Confirm Password"
              required
            />
            <button type="submit">Update</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdatePass;
