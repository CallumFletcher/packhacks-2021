const mongoose = require("mongoose");
const user = require("./User");

const roomSchema = new mongoose.Schema({
  professor: {
    type: String,
    required: false,
    default: "",
  },
  timeSlot: {
    start: {
      type: String,
      required: false,
      default: "1:00 PM",
    },
    end: {
      type: String,
      required: false,
      default: "2:00 PM",
    },
  },
  subscriberList: {
    type: Array,
    required: false,
    default: [],
  },
  capacity: {
    type: Number,
    default: 20,
  },
  name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Room", roomSchema);
