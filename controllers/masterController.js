const asyncHandler = require("express-async-handler");
const Master = require("../models/masterModel");

const getMaster = asyncHandler(async (req, res) => {

  try {
  const master_dropdown = await Master.find({});4
  res.status(200).json({status:true,
    data:master_dropdown});
  } catch (error) {
    res.status(500).json({
      status:false,
      message:error.message
    })
  }
});

module.exports = getMaster
