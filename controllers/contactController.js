const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");
// @desc Get all contacts
// @route GET /api/contacts
// @access private
const getContact = asyncHandler(async (req, res) => {
  const contacts = await Contact.find({user_id: req.user.id});
  res.status(200).json(contacts);
});

// @desc Create new contact
// @route POST /api/contacts
// @access private
const createContact = asyncHandler(async (req, res) => {
  console.log("The request body is :", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandatory !");
  }

  const contact = await Contact.create({
    name,
    email,
    phone,
    user_id : req.user.id
  });

  res.status(201).json(contact);
});

// @desc Update contact
// @route PUT /api/contacts
// @access private
const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }

  const updatedContacts = await Contact.findById(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedContacts);
});

// @desc Delete contact
// @route DELETE /api/contacts/:id
// @access private
const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }

  // await Contact.remove({ _id: req.params.id });
  // await Contact.remove()
  // await Contact.deleteOne()
  await Contact.findByIdAndRemove({_id: req.params.id})
  res.status(200).json(contact);
});

// @desc Get contact by id
// @route GET /api/contacts/:id
// @access private
const getContactById = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  res.status(200).json(contact);
});

module.exports = {
  getContact,
  createContact,
  updateContact,
  deleteContact,
  getContactById,
};
