const mongoose = require("mongoose");

const lobbySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    max: 255,
  },
  currentUsers: {
    type: Number,
    required: true,
  },
  maxUsers: {
    type: Number,
    default: 10,
  },
});

module.exports = mongoose.model("Lobby", lobbySchema);
