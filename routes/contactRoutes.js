const express = require("express");
const router = express.Router();
const {
  getContact,
  createContact,
  getContactById,
  deleteContact,
  updateContact,
  getAllContact,
  uploadImage,
  getImage
} = require("../controllers/contactController");
const validateToken = require("../middleware/validateTokenHandler");

router.use(validateToken)

router.route("/").get(getContact).post(createContact).put(updateContact)
router.route("/all").get(getAllContact)
router.route("/user-image").get(getImage).post(uploadImage)
// router.route("/").post(createContact);

router
  .route("/:id")
  .get(getContactById)
  // .put(updateContact)
  .delete(deleteContact);
// router.route("/:id").put(updateContact);
// router.route("/:id").delete(deleteContact);

module.exports = router;
