const router = require("express").Router();
const Room = require("../models/Room");
const User = require("../models/User");

router.get("/:name", async (req, res) => {
  const roomInfo = await Room.findOne({ name: req.params.name });
  console.log(roomInfo);
  if (roomInfo) {
    res.send({ response: roomInfo.subscriberList }).status(200);
  } else {
    res.send("SADDDDDDDD!").status(400);
  }
});

router.patch("/subscribe/:user", async (req, res) => {
  const userInfo = req.params.user;
  //let roomInfo = await Room.findOne({ name: req.params.name });
  //console.log(roomInfo);
  //const newUser = new User({});
  //roomInfo.subscriberList.append(newUser);
});

router.post("/create-room", async (req, res) => {
  const roomInfo = req.body;
  console.log(roomInfo);
  const room = new Room({
    professor: roomInfo.professor,
    timeSlot: {},
    subscriberList: roomInfo.subscriberList,
    capacity: roomInfo.capacity,
    name: roomInfo.name,
  });
  const saved = await room.save();
  res.send("Room successfully created 😩").status(201);
});

module.exports = router;
