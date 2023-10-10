const asyncHandler = require("express-async-handler");
// const UserDataModel = require("../models/contactModel");
const UserDataModel = require('../models/userModel')

const multer = require("multer");
const imageModel = require("../models/imageModel");
// @desc Get all contacts
// @route GET /api/contacts
// @access private
const getContact = asyncHandler(async (req, res) => {
  try {
    const contacts = await UserDataModel.find({ user_id: req.user.id });
    res.status(200).json({
      status: 200,
      data: contacts,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: error.message,
    });
  }
});

const getAllContact = asyncHandler(async (req, res) => {
  try {
    console.log(req.query)
    const {brideOrGroom , maritalStatus} = req.query;
    const filter = {}

    if(brideOrGroom){
      filter.brideOrGroom = brideOrGroom;
    }

    if(maritalStatus){
      filter.maritalStatus = maritalStatus;
    }
    const contacts = await UserDataModel.find(filter);
    res.status(200).json({
      status: 200,
      data: contacts,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: error.message,
    });
  }
});

// @desc Create new contact
// @route POST /api/contacts
// @access private

const Storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: Storage,
}).single("image");

// const createContact = asyncHandler(async (req, res) => {
//   setTimeout(() => {
//     console.log(req.body, req.user.id)
//   }, 2000);
  // const { fNameEnglish, email, mobile } = req.body;
  // if (!fNameEnglish || !email || !mobile) {
  //   res.status(400);
  //   throw new Error("All fields are mandatory !");
  // }

  // let obj = {...req.body, user_id : req.user.id}
  // console.log(obj)

  // const contact = await Contact.create(obj);
  // console.log(contact)

  // res.status(201).json({"status": 201, contact});
// });

const createContact = asyncHandler(async (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      console.log(err);
    } else {
      const newImage = new UserDataModel({
        ...req.body,
        user_id: req.user.id
      });

      newImage
        .save()
        .then(() => res.send("Successfully uploaded"))
        .catch((err) => {
          console.log(err);
        });
    }
  });
});

const uploadImage = asyncHandler(async (req, res) => {
  upload(req, res, (err)=> {
    if(err){
      console.log(err)
    }else{
      const newImage = new imageModel({
        user_id : req.user.id,
        image : {
          data : req.file.filename,
          contentType: "image/png",
        },
        imagePath : req.file.filename
      })

      newImage
        .save()
        .then(() => res.status(201).json({"message": "Image uploaded successfully", status : 201}))
        .catch((err) => {
          console.log(err);
        });
    }
  })
})

const getImage = asyncHandler(async (req, res)=> {
  try {
    const contacts = await imageModel.find({ user_id: req.user.id });
    res.status(200).json({
      status: 200,
      data: contacts,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: error.message,
    });
  }
})

// @desc Update contact
// @route PUT /api/contacts
// @access private
const updateContact = asyncHandler(async (req, res) => {
  const contact = await UserDataModel.findById(req.user.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }

  const updatedContacts = await UserDataModel.findByIdAndUpdate(
    req.user.id,
    req.body,
    {
      new: true,
    }
  );

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
  await UserDataModel.findByIdAndRemove({ _id: req.params.id });
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
  getAllContact,
  uploadImage,
  getImage
};
