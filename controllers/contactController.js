const asyncHandler = require("express-async-handler");
const UserDataModel = require("../models/contactModel");

const multer = require("multer");
// @desc Get all contacts
// @route GET /api/contacts
// @access private
const getContact = asyncHandler(async (req, res) => {
  const contacts = await UserDataModel.find({ user_id: req.user.id });
  res.status(200).json(contacts);
});

const getAllContact = asyncHandler(async(req, res)=>{
  const contacts = await UserDataModel.find({});
  res.status(200).json(contacts);
})

// @desc Create new contact
// @route POST /api/contacts
// @access private

const Storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
});

const upload = multer({
  storage: Storage
}).single("testImage");

// const createContact = asyncHandler(async (req, res) => {
//   console.log(req.body, req.user.id)
//   // const { fNameEnglish, email, mobile } = req.body;
//   // if (!fNameEnglish || !email || !mobile) {
//   //   res.status(400);
//   //   throw new Error("All fields are mandatory !");
//   // }

//   let obj = {...req.body, user_id : req.user.id}
//   console.log(obj)

//   const contact = await Contact.create(obj);
//   console.log(contact)

//   res.status(201).json({"working" : true});
// });

const createContact = asyncHandler(async (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      console.log(err)
    } else {
      const newImage = new UserDataModel({
        ...req.body,
        user_id: req.user.id,
        image: {
          data: req.file.filename,
          contentType: 'image/png',
        },
        imagePath: `http://loacalhost:5001/${req.file.filename}`
      });

      newImage
        .save()
        .then(() => res.send("Successfully uploaded"))
        .catch((err) => {
          console.log(err);
        })
    }
  })
});

// @desc Update contact
// @route PUT /api/contacts
// @access private
const updateContact = asyncHandler(async (req, res) => {
  const contact = await UserDataModel.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }

  const updatedContacts = await UserDataModel.findById(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedContacts);
});

// @desc Delete contact
// @route DELETE /api/contacts/:id
// @access private
const deleteContact = asyncHandler(async (req, res) => {
  const contact = await UserDataModel.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }

  // await Contact.remove({ _id: req.params.id });
  // await Contact.remove()
  // await Contact.deleteOne()
  await UserDataModel.findByIdAndRemove({ _id: req.params.id })
  res.status(200).json(contact);
});

// @desc Get contact by id
// @route GET /api/contacts/:id
// @access private
const getContactById = asyncHandler(async (req, res) => {
  const contact = await UserDataModel.findById(req.params.id);
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
  getAllContact
};
