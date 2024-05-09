import React, { useContext, useEffect, useRef, useState } from "react";
import LoginService from "../services/LoginService";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import "../components/css/login.css";

import { useDispatch } from "react-redux";
import { addUser, removeUser } from "./redux/userSlice";

const LoginPage = () => {
  const navigate = useNavigate();
  let emailRef = useRef();
  let passRef = useRef();

  let attempts = 0;
  useEffect(() => {
    dispatch(removeUser());
  }, []);

  let dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    const response = LoginService.verifyLoginDetails({
      email: emailRef.current.value,
      password: passRef.current.value,
      attempts: attempts,
    });

    response
      .then((resp) => {
        toast.success("Login Success");
        setTimeout(() => {
          dispatch(addUser(resp.data));

          navigate("/home");
        }, 1000);
      })
      .catch((e) => {
        if (e.response.status == 423) {
          toast.error("Account Locked, Contact Admin");
        }
        if (e.response.status == 400) {
          attempts = 1 + Number.parseInt(e.response.data.errorMessage);

          toast.error("Incorrect Password, Attempts Left :" + (5 - attempts));
        }
      });
  };

  const validateEmail = () => {
    const response = LoginService.verifyEmail(emailRef.current.value);
    response
      .then(() => {
        setErrMsg("");
      })
      .catch((e) => {
        if (e.response && e.response.status == 404) {
          toast.error(
            "No users found with email Id: " + emailRef.current.value
          );
        }
      });
  };
  return (
    <>
      <div>
        <Toaster />
      </div>
      <div className="login-body ">
        <div className="login-container">
          <h2>Login</h2>

          <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
            <div className="error-message"></div>
            <input
              ref={emailRef}
              type="email"
              name="email"
              placeholder="Email"
              required
              onBlur={validateEmail}
            />
            <input
              ref={passRef}
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <button type="submit">Log In</button>
            <p style={{ textAlign: "center" }}>
              <span
                onClick={() => navigate("/forgot-pass")}
                style={{ color: "blue", cursor: "pointer" }}
              >
                Forgot Passowrd
              </span>
            </p>
            <button
              onClick={() => {
                navigate("/signup");
              }}
            >
              Sign Up
            </button>
            <p style={{ textAlign: "center" }}>No Account? Sign Up Here</p>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
