const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    max: 255,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  userCreated: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);
