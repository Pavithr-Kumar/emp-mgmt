import axios from "axios";

class EmployeeService {
  static getAllEmployees() {
    return axios.get("http://localhost:8080/employees");
  }

  static getEmployeeById(id) {
    return axios.get("http://localhost:8080/employee/" + id);
  }

  static saveEmployeeByAdmin(user) {
    return axios.post("http://localhost:8080/employee/save", user);
  }

  static deleteEmployeeByAdmin(id) {
    return axios.delete("http://localhost:8080/employee/delete/" + id);
  }

  static updateEmployeeByAdmin(user) {
    return axios.put("http://localhost:8080/employee/update", user);
  }
}

export default EmployeeService;
