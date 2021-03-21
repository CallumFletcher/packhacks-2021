const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const verify = require("./verify");
const { base } = require("../models/User");

router.post("/register", async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);
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

router.post("/admin/populateUserbase", async (req, res) => {
  res.send(400);
  // const sampleUsers = [
  // {
  //   "email": "melany.wijngaard@example.com",
  //   "gender": "female",
  //   "phone_number": "(727)-033-9347",
  //   "birthdate": 608022796,
  //   "location": {
  //     "street": "2431 predikherenkerkhof",
  //     "city": "staphorst",
  //     "state": "gelderland",
  //     "postcode": 64265
  //   },
  //   "username": "bigpeacock217",
  //   "password": "eagle",
  //   "first_name": "melany",
  //   "last_name": "wijngaard",
  //   "title": "miss",
  //   "picture": "women/70.jpg"
  // },
  // {
  //   "email": "nanna.pedersen@example.com",
  //   "gender": "female",
  //   "phone_number": "43672992",
  //   "birthdate": 591428535,
  //   "location": {
  //     "street": "2177 fåborgvej",
  //     "city": "aarhus",
  //     "state": "syddanmark",
  //     "postcode": 87547
  //   },
  //   "username": "purpleduck599",
  //   "password": "davids",
  //   "first_name": "nanna",
  //   "last_name": "pedersen",
  //   "title": "ms",
  //   "picture": "women/68.jpg"
  // },
  // {
  //   "email": "amelia.mercier@example.com",
  //   "gender": "female",
  //   "phone_number": "(168)-747-5950",
  //   "birthdate": 1132298571,
  //   "location": {
  //     "street": "7454 rue duquesne",
  //     "city": "echandens-denges",
  //     "state": "vaud",
  //     "postcode": 3811
  //   },
  //   "username": "whitefrog218",
  //   "password": "forest",
  //   "first_name": "amelia",
  //   "last_name": "mercier",
  //   "title": "madame",
  //   "picture": "women/91.jpg"
  // },
  // {
  //   "email": "sarah.oliver@example.com",
  //   "gender": "female",
  //   "phone_number": "0761-814-654",
  //   "birthdate": 1038915780,
  //   "location": {
  //     "street": "3503 manor road",
  //     "city": "manchester",
  //     "state": "highlands and islands",
  //     "postcode": "I30 5ZF"
  //   },
  //   "username": "purplebear893",
  //   "password": "boat",
  //   "first_name": "sarah",
  //   "last_name": "oliver",
  //   "title": "ms",
  //   "picture": "women/73.jpg"
  // },
  // {
  //   "email": "عسل.مرادی@example.com",
  //   "gender": "female",
  //   "phone_number": "0925-326-2063",
  //   "birthdate": 417058382,
  //   "location": {
  //     "street": "4981 شهید بهشتی",
  //     "city": "پاکدشت",
  //     "state": "مرکزی",
  //     "postcode": 68555
  //   },
  //   "username": "ticklishfish813",
  //   "password": "zaq12wsx",
  //   "first_name": "عسل",
  //   "last_name": "مرادی",
  //   "title": "mrs",
  //   "picture": "women/65.jpg"
  // },
  // {
  //   "email": "özkan.tekelioğlu@example.com",
  //   "gender": "male",
  //   "phone_number": "(074)-376-7384",
  //   "birthdate": 616226885,
  //   "location": {
  //     "street": "2260 anafartalar cd",
  //     "city": "afyonkarahisar",
  //     "state": "amasya",
  //     "postcode": 31532
  //   },
  //   "username": "organiccat298",
  //   "password": "coventry",
  //   "first_name": "özkan",
  //   "last_name": "tekelioğlu",
  //   "title": "mr",
  //   "picture": "men/69.jpg"
  // },
  // {
  //   "email": "angela.newman@example.com",
  //   "gender": "female",
  //   "phone_number": "081-718-3989",
  //   "birthdate": 479824115,
  //   "location": {
  //     "street": "3159 west street",
  //     "city": "celbridge",
  //     "state": "colorado",
  //     "postcode": 82776
  //   },
  //   "username": "smallgorilla567",
  //   "password": "1234567",
  //   "first_name": "angela",
  //   "last_name": "newman",
  //   "title": "mrs",
  //   "picture": "women/82.jpg"
  // },
  // {
  //   "email": "buse.dağdaş@example.com",
  //   "gender": "female",
  //   "phone_number": "(855)-841-4810",
  //   "birthdate": 1316736697,
  //   "location": {
  //     "street": "6428 anafartalar cd",
  //     "city": "malatya",
  //     "state": "mardin",
  //     "postcode": 28227
  //   },
  //   "username": "crazypeacock394",
  //   "password": "paulie",
  //   "first_name": "buse",
  //   "last_name": "dağdaş",
  //   "title": "ms",
  //   "picture": "women/14.jpg"
  // },
  // {
  //   "email": "judith.schmitz@example.com",
  //   "gender": "female",
  //   "phone_number": "0171-7824648",
  //   "birthdate": 1348121292,
  //   "location": {
  //     "street": "8227 römerstraße",
  //     "city": "mittweida",
  //     "state": "berlin",
  //     "postcode": 34006
  //   },
  //   "username": "smallcat785",
  //   "password": "prissy",
  //   "first_name": "judith",
  //   "last_name": "schmitz",
  //   "title": "miss",
  //   "picture": "women/49.jpg"
  // },
  // {
  //   "email": "hector.guerrero@example.com",
  //   "gender": "male",
  //   "phone_number": "696-963-949",
  //   "birthdate": 1040720948,
  //   "location": {
  //     "street": "5140 calle nebrija",
  //     "city": "alcobendas",
  //     "state": "navarra",
  //     "postcode": 56387
  //   },
  //   "username": "lazyleopard999",
  //   "password": "godfather",
  //   "first_name": "hector",
  //   "last_name": "guerrero",
  //   "title": "mr",
  //   "picture": "men/11.jpg"
  // },
  // {
  //   "email": "carsta.rocha@example.com",
  //   "gender": "male",
  //   "phone_number": "(60) 1416-4953",
  //   "birthdate": 296641611,
  //   "location": {
  //     "street": "2609 rua rio de janeiro ",
  //     "city": "arapongas",
  //     "state": "amapá",
  //     "postcode": 91540
  //   },
  //   "username": "redfish833",
  //   "password": "soccer12",
  //   "first_name": "carsta",
  //   "last_name": "rocha",
  //   "title": "mr",
  //   "picture": "men/4.jpg"
  // },
  // {
  //   "email": "irene.morales@example.com",
  //   "gender": "female",
  //   "phone_number": "625-790-958",
  //   "birthdate": 513983644,
  //   "location": {
  //     "street": "4096 calle del arenal",
  //     "city": "lorca",
  //     "state": "castilla y león",
  //     "postcode": 40542
  //   },
  //   "username": "goldenfish109",
  //   "password": "field",
  //   "first_name": "irene",
  //   "last_name": "morales",
  //   "title": "mrs",
  //   "picture": "women/87.jpg"
  // },
  // {
  //   "email": "laly.dasilva@example.com",
  //   "gender": "female",
  //   "phone_number": "(082)-419-9335",
  //   "birthdate": 1123776172,
  //   "location": {
  //     "street": "5396 rue duquesne",
  //     "city": "villars-le-terroir",
  //     "state": "ticino",
  //     "postcode": 9152
  //   },
  //   "username": "bluebird274",
  //   "password": "design",
  //   "first_name": "laly",
  //   "last_name": "da silva",
  //   "title": "mademoiselle",
  //   "picture": "women/9.jpg"
  // },
  // {
  //   "email": "benjamin.patel@example.com",
  //   "gender": "male",
  //   "phone_number": "(788)-424-7144",
  //   "birthdate": 929834606,
  //   "location": {
  //     "street": "3675 tennyson street",
  //     "city": "masterton",
  //     "state": "manawatu-wanganui",
  //     "postcode": 81684
  //   },
  //   "username": "beautifulbear427",
  //   "password": "cartman",
  //   "first_name": "benjamin",
  //   "last_name": "patel",
  //   "title": "mr",
  //   "picture": "men/40.jpg"
  // },
  // {
  //   "email": "noah.poulsen@example.com",
  //   "gender": "male",
  //   "phone_number": "53705244",
  //   "birthdate": 1314124015,
  //   "location": {
  //     "street": "7998 oddenvej",
  //     "city": "nr åby",
  //     "state": "syddanmark",
  //     "postcode": 73617
  //   },
  //   "username": "purplesnake503",
  //   "password": "zelda",
  //   "first_name": "noah",
  //   "last_name": "poulsen",
  //   "title": "mr",
  //   "picture": "men/41.jpg"
  // },]
  // let baseScore = 1000*3600*200;
  // sampleUsers.forEach((el) => {
  //   const user = new User({
  //     username: el.username,
  //     password: el.password,
  //     role: "student",
  //     score: Math.floor(Math.random() * baseScore),
  //   });
  //   user.save();
  // })
  // res.send(200);

  //   res.send({ updatedScore: req.body.score });
});

module.exports = router;
