// @desc Get all contacts
// @route GET /api/contacts
// @access public
const getContact = (req, res) => {
  res.status(200).json({ message: "Get all contacts" });
};

// @desc Create new contact
// @route POST /api/contacts
// @access public
const createContact = (req, res) => {
  console.log("The request body is :", req.body);
  const { name, email, phone } = req.body;
  if(!name || !email || !phone){
    res.status(400);
    throw new Error("All fields are mandatory !")
  }
  res.status(201).json({ message: "Create contact" });
};

// @desc Update contact
// @route PUT /api/contacts
// @access public
const updateContact = (req, res) => {
  res.status(200).json({ message: `Update contact for ${req.params.id}` });
};

// @desc Delete contact
// @route DELETE /api/contacts
// @access public
const deleteContact = (req, res) => {
  res.status(200).json({ message: `Delete contact for ${req.params.id}` });
};

// @desc Get contact by id
// @route GET /api/contacts
// @access public
const getContactById = (req, res) => {
  res.status(200).json({ message: `Get contact for ${req.params.id}` });
};

module.exports = {
  getContact,
  createContact,
  updateContact,
  deleteContact,
  getContactById,
};
