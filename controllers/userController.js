const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

// @desc Register a user
// @route POST / api/users/register
// @access public
const registerUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, phone, email, password, paymentStatus,  subscription} = req.body;
  if (!firstName || !lastName || !phone || !email || !password || !paymentStatus || !subscription) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }
  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    res.status(400);
    throw new Error("User already registered!!");
  }
  
  //   Hash password
  // const hashedPassword = await bcrypt.hash(password, 10);
  // console.log("the register user function called")
  // console.log("Hashed Password: ", hashedPassword);
  const user = await User.create({
    firstName,
    lastName,
    phone,
    fullName : firstName + " " + lastName,
    email,
    password,
    status : 'Active',
    paymentStatus,
    subscription,
    subscriptionStartDate : new Date(),
    subscriptionEndDate : new Date(new Date().setFullYear(new Date().getFullYear() + 1))
  });

  console.log(`User created ${user}`);
  if (user) {
    res.status(201).json({
      _id: user.id,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("User data is not valid");
  }
  // res.json({ message: "Register the user" });
});

// @desc login a user
// @route POST / api/users/login
// @access public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }
  const user = await User.findOne({ email });
  const userPassword = user.password == password
  // compare password with hashpassword
  // if (user && (await bcrypt.compare(password, user.password))) {
    console.log(user)
    if (user && userPassword && user.status == 'Active') {
    console.log(password)
    const accessToken = jwt.sign(
      {
        user: {
          username: user.fname + user.lname,
          email: user.email,
          id: user.id,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      {expiresIn: "45m"}
    );
    res.status(200).json({ accessToken });
  }else{
    res.status(401)
    throw new Error("Email or Password is not valid or Active");
  }
});

// @desc current user
// @route GET / api/users/current
// @access private
const currentUser = asyncHandler(async (req, res) => {
  contacts = await User.findOne({email : req.user.email})
  res.json(contacts);
});

module.exports = { registerUser, loginUser, currentUser };
