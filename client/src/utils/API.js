import axios from "axios";

export default {
  // Gets all employees
  getEmployees: function() {
    return axios.get("/api/employees");
  },
  // Gets the employee with the given id
  getEmployee: function(id) {
    return axios.get("/api/employees/" + id);
  }
};
