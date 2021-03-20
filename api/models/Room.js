const mongoose = require("mongoose");
const user = require("./User");

const roomSchema = new mongoose.Schema({
  teacher: {
    type: String,
    required: false,
  },
  timeSlot: {
    start: {
      type: Date,
      required: false,
    },
    end: {
      type: Date,
      required: false,
    },
  },
  subscriberList: {
    type: Array[user],
    required: false,
  },
  capacity: {
    type: Number,
    required: true,
    default: 20,
  },
  name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Room", roomSchema);
