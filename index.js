const express = require("express");
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
/*
  io.emit("message", { message: "User joined", name: "server" });


  socket.on("disconnect", () => {
    io.emit("message", { message: "User disconected", name: "server"});
  });

  */
io.on("connection", (socket) => {
  // Join a conversation
  const { roomId } = socket.handshake.query;
  socket.join(roomId);

  // New user join
  io.in(roomId).emit("newChatMessage", {
    message: "User joined",
    name: "server",
  });

  // Listen for new messages
  socket.on("newChatMessage", (message) => {
    io.in(roomId).emit("newChatMessage", message);
  });

  // Leave the room if the user closes the socket
  socket.on("disconnect", () => {
    socket.leave(roomId);
    io.in(roomId).emit("newChatMessage", {
      message: "User disconected",
      name: "server",
    });
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
