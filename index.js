const express = require("express");
const path = require("path");
const http = require("http");
const socketIo = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIo(server, { cors: { origin: "*" } });

io.on("connection", (socket) => {
  console.log("new connection");

  io.emit("message", { message: "user joined", name: "server" });

  socket.on("disconnect", () => {
    io.emit("message", "user has left");
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

server.listen(process.env.PORT || 5000, () => {
  console.log("listening on port " + 5000);
});
