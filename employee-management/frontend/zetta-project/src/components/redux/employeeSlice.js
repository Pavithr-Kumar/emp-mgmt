import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

let user;
const userCookie = Cookies.get("employee");

if (userCookie) {
  try {
    user = JSON.parse(userCookie);
  } catch (error) {
    navigat;
  }
} else {
  user = null;
}

const getRoleById = (id) => {
  switch (id) {
    case 1:
      return "Admin";
    case 2:
      return "Manager";
    case 3:
      return "Employee";
  }
};
let role = user ? getRoleById(user.roleId) : "";
const initialState = user
  ? {
      empId: user.empId,
      email: user.email,
      role: role,
      firstName: user.firstName,
      lastName: user.lastName,
    }
  : null;

let userSlice = createSlice({
  name: "userSlice",
  initialState: initialState,
  reducers: {
    addUser(state, action) {
      Cookies.set("user", JSON.stringify(action.payload), { expires: 1 });
      // console.log(action.payload);
      let role = getRoleById(action.payload.roleId);
      return {
        empId: action.payload.empId,
        email: action.payload.email,
        role: role,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
      };
    },
    removeUser(state, action) {
      Cookies.remove("user");
      return null;
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice = userSlice.reducer;
