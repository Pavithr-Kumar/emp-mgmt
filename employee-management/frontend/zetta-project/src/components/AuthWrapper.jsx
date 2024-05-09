import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

export const AuthWrapper = ({ children }) => {
  let navigate = useNavigate();
  let user = useSelector((st) => st.userSlice);
  useEffect(() => {
    if (user == null) navigate("/login");
  }, []);
  return <>{children}</>;
};
