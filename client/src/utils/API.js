import axios from "axios";

export default {
  // Gets all employees
  getEmployees: function () {
    return axios.get("/api/employees");
  },
  sortEmployees: function (order) {
    //gets all employees and sorts them
    return axios.get("/api/employees/sort/" + order);
  },
  // Filters for employees with the given name
  filterEmployees: function (name) {
    console.log("filter called");
    return axios.get("/api/employees/filter/" + name);
  },
  // Gets the employee with the given id
  getEmployee: function (id) {
    return axios.get("/api/employees/" + id);
  }
};
