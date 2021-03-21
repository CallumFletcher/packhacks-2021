const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const verify = require("./verify");
const { base } = require("../models/User");

router.post("/register", async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);
  console.log("message")
  const user = new User({
    username: req.body.username,
    password: hashPassword,
    role: req.body.role,
    score: Math.floor(Math.random() * 100000),
  });
  try {
    const usernameTaken = await User.findOne({ username: req.body.username });
    if (usernameTaken) {
      return res.status(400).send("😐 username 😤 already 😠 taken 😡");
    }
    const savedUser = await user.save();
    res.send("User created successfully  😩").status(200);
  } catch (error) {
    res.status(400).send("😢 something 😭 went 😤 wrong 😠 with 😡 request 🤬");
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return res.status(400).send("😐 no 😤 user 😠 found 😡");
    }
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) {
      return res.status(400).send("🤡 invalid 💩 password 💀");
    }
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
    res.header("auth-token", token).send(token);
  } catch (error) {
    res.status(400).send("😢 something 😭 went 😤 wrong 😠 with 😡 request 🤬");
  }
});
router.post("/score/change", verify, async (req, res) => {
  if (!req.body.score) {
    res.status(400).send("😢 something 😭 went 😤 wrong 😠 with 😡 request 🤬");
  } else {
    User.findByIdAndUpdate(req.user, { score: req.body.score });
    res.send(200);
  }

  //   res.send({ updatedScore: req.body.score });
});
router.post("/score/increment", verify, async (req, res) => {
  if (!req.body.score) {
    res.status(400).send("😢 something 😭 went 😤 wrong 😠 with 😡 request 🤬");
  } else {
    let score = await User.findById(req.user);
    score = score.score;
    score += req.body.score;
    res.send(200);
  }

  //   res.send({ updatedScore: req.body.score });
});

module.exports = router;
