const mongoose = require("mongoose");
const db = require("../models");
const faker = require ("faker");

// This file empties the employee collection and inserts 20 random employees

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/employeesearch"
);

const employeeSeed = [];
let empNumber = 20;

for(let i=0;i<empNumber; i++){
  employeeSeed.push({
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber(),
    dob:  faker.date.past(),
    department: faker.commerce.department(),
    quote: faker.lorem.sentence() 
  })
}

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
