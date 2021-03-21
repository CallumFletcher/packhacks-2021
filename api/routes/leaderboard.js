const router = require("express").Router();
const verify = require("./verify");
const User = require("../models/User");
router.get("/top", verify, async (req, res) => {
  let students = await User.find({ role: "student" });
  students = students.map((element) => {
    element.password = null;
    return element;
  });
  students.sort((a, b) => b.score - a.score);
  res.send(students.slice(0, 10));
});
router.get("/user", verify, async (req, res) => {
  try {
    let students = await User.find({ role: "student" });
    let index;
    students.sort((a, b) => b.score - a.score);
    let info = students.filter((element, i) => {
      const isUser = element._id == req.user;
      if (isUser) {
        index = i;
      }
      return isUser;
    });
    res.send({ index: index, data: info[0] });
  } catch (error) {
    res.status(400).send("something went wrong");
  }
});

module.exports = router;
