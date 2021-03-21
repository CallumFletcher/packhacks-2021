var express = require("express");
const path = require("path");
const http = require("http");
const socketIo = require("socket.io");

const app = express();
const dotenv = require("dotenv");
const port = process.env.PORT || 5000;
const cors = require("cors");
const Lobby = require("./api/models/Lobby");

//setup socket
const server = http.createServer(app);
const io = socketIo(server, { cors: { origin: "*" } });

const mongoose = require("mongoose");

app.use(cors());
app.options("*", cors());

dotenv.config();

//db connection
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () =>
  console.log("connected to db 😎")
);

//middleware
app.use(express.json());

//routes
const authRoute = require("./api/routes/auth");
const roomRoute = require("./api/routes/room");
app.use("/api/user", authRoute);
app.use("/api/room", roomRoute);

const leaderboardRoute = require("./api/routes/leaderboard");
app.use("/api/leaderboard", leaderboardRoute);

//basic chat stuff, needs to be changed
io.on("connection", (socket) => {
  console.log("new connection");

  socket.on("disconnect", () => {
    io.emit("message", "user has left");
  });

  socket.on("message", (message) => {
    console.log(message, "BACKEND");
    io.emit("message", message);
  });
});

//serves react app

app.use(express.static(path.join(__dirname, "client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

server.listen(port, () => {
  console.log(`listening on port ${port}  🥵`);
});
