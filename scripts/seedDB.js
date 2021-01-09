const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/employeesearch"
);

const employeeSeed = [
  {
    firstName: "Bob",
    lastName: "Smith",
    email: "RobbyBoy@techco.com",
    phone: "555-123-4567",
    dob:  "07/20/1980"
  },
  {
    firstName: "Michael",
    lastName: "Scott",
    email: "mScott@techco.com",
    phone: "555-321-5678",
    dob:  "07/20/1974"
  },
];

db.Employee
  .remove({})
  .then(() => db.Employee.collection.insertMany(employeeSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
