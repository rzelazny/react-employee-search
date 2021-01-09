import axios from "axios";

export default {
  // Gets all employees
  getEmployees: function() {
    return axios.get("/api/employees");
  },
  sortEmployees: function(order) {
    //gets all employees and sorts them
    return axios.get("/api/employees/sort/" + order);
  },
  // Gets the employee with the given id
  getEmployee: function(id) {
    return axios.get("/api/employees/" + id);
  }
};
