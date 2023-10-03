const express = require("express");
const router = express.Router();
const getMaster = require("../controllers/masterController");
const validateToken = require("../middleware/validateTokenHandler");

// router.use(validateToken)
router.get("/", getMaster)
// router.route("/").get(getMaster)

module.exports = router;
