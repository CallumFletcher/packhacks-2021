const router = require("express").Router();
const Room = require("../models/Room");
const User = require("../models/User");

router.get("/:name", async (req, res) => {
  const roomInfo = await Room.findOne({ name: req.params.name });
  console.log(roomInfo._id);
  if (roomInfo) {
    res.send({ response: roomInfo._id }).status(200);
  } else {
    res.send("SADDDDDDDD!").status(400);
  }
});

router.patch("/subscribe/:room", async (req, res) => {
  const roomId = req.params.room;
  const userName = req.body.username;
  console.log(roomId);
  console.log(req.body);
  let roomInfo = await Room.findOne({ _id: req.params.room });
  console.log(roomInfo);
  let userList = roomInfo.subscriberList;
  if (!userList.includes(userName)) {
    userList.push(userName);
  }
  console.log(userList);
  await roomInfo.updateOne({
    subscriberList: userList,
  });
});

router.patch("/unsubscribe/:room", async (req, res) => {
  const roomId = req.params.room;
  const userName = req.body.username;
  console.log(roomId);
  console.log(req.body);
  let roomInfo = await Room.findOne({ _id: req.params.room });
  console.log(roomInfo);
  let userList = roomInfo.subscriberList;
  if (userList.includes(userName)) {
    userList.remove(userName);
  }
  console.log(userList);
  await roomInfo.updateOne({
    subscriberList: userList,
  });
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
