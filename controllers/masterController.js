const asyncHandler = require("express-async-handler");
const Master = require("../models/masterModel");

const getMaster = asyncHandler(async (req, res) => {
  const master_dropdown = await Master.find({});4
  res.status(200).json(master_dropdown);
});

module.exports = getMaster
