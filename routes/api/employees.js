const router = require("express").Router();
const employeeController = require("../../controllers/employeeController");

// Matches with "/api/employees"
router.route("/")
  .get(employeeController.findAll)

router.route("/filter/:name")
  .get(employeeController.filtered)

router.route("/sort/:order")
  .get(employeeController.sorted)
  
// Matches with "/api/employees/:id"
router
  .route("/:id")
  .get(employeeController.findById)

module.exports = router;
