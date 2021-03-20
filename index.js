const express = require("express");
const path = require("path");
const http = require("http");
const socketIo = require("socket.io");

const app = express();

//setup socket
const server = http.createServer(app);
const io = socketIo(server, { cors: { origin: "*" } });

  const mongoose = require("mongoose");
  const dotenv = require("dotenv");
  const port = process.env.PORT || 5000;
  const cors = require("cors");

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
const authRoute = require("./routes/auth");
app.use("/api/user", authRoute);

//basic chat stuff, needs to be changed
io.on("connection", (socket) => {
  console.log("new connection");

  io.emit("message", { message: "User joined", name: "server" });

  socket.on("disconnect", () => {
    io.emit("message", { message: "User disconected", name: "server"});
  });

  socket.on("message", (message) => {
    console.log("messsage sent");
    io.emit("message", message);
  });
  

});

app.use(express.static(path.join(__dirname, "client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

server.listen(port, () => {
  console.log(`listening on port ${port}  🥵`);
});