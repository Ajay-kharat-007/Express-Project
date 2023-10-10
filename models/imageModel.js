const mongoose = require("mongoose");

const imageSchema = mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    image: {
      data: Buffer,
      contentType: String,
    },
    imagePath: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("images", imageSchema);
