import React from "react";
import { useSelector } from "react-redux";
import { FaUserTie } from "react-icons/fa6";
import { FaUsersBetweenLines } from "react-icons/fa6";
import { RiFolderUserLine } from "react-icons/ri";
import { TbPasswordUser } from "react-icons/tb";
import "../css/profile.css";

const Profile = ({ employee }) => {
  let user;
  if (employee == null) user = useSelector((st) => st.userSlice);
  else user = employee;
  console.log(user);
  const getRole = (id) => {
    console.log(id);  
    switch (id) {
      case 1:
        return "Admin";
      case 2:
        return "Manager";
      case 3:
        return "Employee";
    }
  };
  return (
    <div className="profile-container">
      <div className="profile-header">
        <h2>{user && <span>{user.firstName + " " + user.lastName}</span>}</h2>
        {/* <img src={employee.profilePicture} alt="Profile" /> */}
      </div>
      <div className="profile-info">
        <div className="profile-item">
          <TbPasswordUser className="icon" />
          <h3>Employee Id:</h3>
          <p>ZM-{user.empId}</p>
        </div>
        <div className="profile-item">
          <FaUserTie className="icon" />
          <h3>Email:</h3>
          <p>{user.email}</p>
        </div>
        <div className="profile-item">
          <FaUsersBetweenLines className="icon" />
          <h3>Position:</h3>
          {employee == null ? (
            <p> {user.role}</p>
          ) : (
            <p>{getRole(user.roleId)}</p>
          )}
        </div>
        <div className="profile-item">
          <RiFolderUserLine className="icon" />
          <h3>Department:</h3>
          <p>HR</p>
        </div>
        {/* Add more information as needed */}
      </div>
    </div>
  );
};

export default Profile;
