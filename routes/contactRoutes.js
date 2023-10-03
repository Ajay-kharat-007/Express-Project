const express = require("express");
const router = express.Router();
const {
  getContact,
  createContact,
  getContactById,
  deleteContact,
  updateContact,
  getAllContact,
} = require("../controllers/contactController");
const validateToken = require("../middleware/validateTokenHandler");

router.use(validateToken)

router.route("/").get(getContact).post(createContact);
router.route("/all").get(getAllContact)
// router.route("/").post(createContact);

router
  .route("/:id")
  .get(getContactById)
  .put(updateContact)
  .delete(deleteContact);
// router.route("/:id").put(updateContact);
// router.route("/:id").delete(deleteContact);

module.exports = router;
