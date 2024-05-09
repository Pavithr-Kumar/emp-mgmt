import React, { useContext, useRef, useState } from "react";
import LoginService from "../../services/LoginService";
import { useNavigate } from "react-router-dom";

import toast, { Toaster } from "react-hot-toast";

const ForgotPass = () => {
  const navigate = useNavigate();
  let emailRef = useRef();

  let [errMsg, setErrMsg] = useState("");

  const validateEmail = () => {
    const response = LoginService.verifyEmail(emailRef.current.value);
    // setLoading(true);
    response
      .then(() => {
        setErrMsg("");
      })
      .catch((e) => {
        if (e.response.status == 404) {
          setErrMsg("No users found with email Id");
        }
      });
  };

  const handleSubmit = () => {
    return (
      LoginService.forgotPassword(emailRef.current.value)
        //setLoading(true);

        .then((resp) => {
          // setLoading(false);
          setTimeout(() => {
            navigate("/login");
          }, 1000);
        })
        .catch((err) => {
          // setLoading(false);
          console.log(err);
        })
    );
  };

  const handleForgot = (e) => {
    e.preventDefault();
    toast.promise(handleSubmit(), {
      loading: "Sending...",
      success: <b>Email Sent Successfully!</b>,
      error: <b>Sorry Email didn't sent</b>,
    });
  };
  return (
    <>
      <div>
        <Toaster />
      </div>
      <div className="login-body ">
        <div class="login-container">
          <h2>Enter email</h2>
          <p>{errMsg}</p>
          <form class="login-form" onSubmit={(e) => handleForgot(e)}>
            <div class="error-message"></div>
            <input
              ref={emailRef}
              type="email"
              name="email"
              placeholder="Email"
              required
              onBlur={validateEmail}
            />

            <button type="submit">Send Temporary Passowrd</button>
            <button
              style={{ marginTop: 16 }}
              onClick={() => navigate("/login")}
            >
              Back to Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgotPass;
