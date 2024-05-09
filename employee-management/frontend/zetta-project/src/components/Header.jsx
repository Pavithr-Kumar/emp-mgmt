import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";

import "./css/header.css";
import { FaUser } from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "./redux/userSlice";
const Header = () => {
  const navigate = useNavigate();
  let user = useSelector((st) => st.userSlice);
  let dispatch = useDispatch();
  return (
    <nav className="vertical-navbar">
      <div className="navbar-brand">
        <NavLink to="/home" className="logo-link">
          <img src={Logo} alt="Logo" className="logo-img" />
        </NavLink>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <FaUser
            style={{ display: "block", marginInline: "auto", fontSize: 36 }}
          />

          <h2 style={{ textAlign: "center", marginBottom: 5 }}>
            {user && <span>{user.firstName + " " + user.lastName}</span>}
          </h2>
          <p style={{ textAlign: "center", marginTop: 5 }}>{user.role}</p>
        </li>

        <li className="nav-item">
          <NavLink to="/home" className="nav-link fw-bold my-2">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/profile" className="nav-link fw-bold my-2">
            Profile
          </NavLink>
        </li>

        {user && user.role !== "Employee" && (
          <>
            <li className="nav-item">
              <NavLink to="/employees" className="nav-link fw-bold my-2">
                Employees
              </NavLink>
            </li>
          </>
        )}
        {user && user.roleId === "Employee" && (
          <li className="nav-item">
            <NavLink to="/employee" className="nav-link fw-bold my-2">
              Employee
            </NavLink>
          </li>
        )}
        <li className="nav-item">
          <NavLink to="/update-pass" className="nav-link fw-bold my-2">
            Update Password
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" className="nav-link fw-bold my-2">
            Contact Us
          </NavLink>
        </li>
        <li className="nav-item">
          <button
            href="/login"
            onClick={() => {
              dispatch(removeUser());
              navigate("/login");
            }}
            className="button"
          >
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
