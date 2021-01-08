const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: String,
  phone: String,
  dob:  Date 
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
