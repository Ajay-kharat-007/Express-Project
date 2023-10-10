const express = require("express");
const router = express.Router();
const sendMail = require("../controllers/sendMailController");

router.route("/").get(sendMail)

module.exports = router;
