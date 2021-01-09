const db = require("../models");

// Defining methods for the employeeController
module.exports = {
  findAll: function(req, res) {
    db.Employee
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  filtered: function(req, res) {
    console.log("Filtered called", req.params.name);
    db.Employee
      .find(req.query)
      .sort({lastName: req.params.name})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  sorted: function(req, res) {
    db.Employee
      .find(req.query)
      .sort({ lastName: req.params.order })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Employee
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  // update: function(req, res) {
  //   db.Employee
  //     .findOneAndUpdate({ _id: req.params.id }, req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
};
