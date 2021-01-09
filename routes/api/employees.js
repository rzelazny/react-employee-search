const router = require("express").Router();
const employeeController = require("../../controllers/employeeController");

// Matches with "/api/employees"
router.route("/")
  .get(employeeController.findAll)

// Matches with "/api/employees/:id"
router
  .route("/:id")
  .get(employeeController.findById)

module.exports = router;
