const router = require("express").Router();
const employeeRoutes = require("./employees");

// Employee routes
router.use("/employees", employeeRoutes);

module.exports = router;
