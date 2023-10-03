let mongoose = require("mongoose")

const masterSchema = mongoose.Schema({})

module.exports = mongoose.model("masters_dropdown", masterSchema)