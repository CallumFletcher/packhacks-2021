import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { TextField, Button } from "@material-ui/core";

//for local testing, change to localhost:5000
//the react proxy doesn't like socket connections
const socket = io.connect("localhost:5000");

function App(props) {
  const [message, setMessage] = useState({ message: "", name: "" });
  const [chat, setChat] = useState([]);
  //lkjlkj
  useEffect(() => {
    socket.on("message", (message) => {
      setChat((prev) => [...prev, message]);
      console.log(message);
    });
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <TextField
        style={{ paddingBottom: 10 }}
        variant="outlined"
        placeholder="name"
        value={message.name}
        onChange={(e) => {
          setMessage((prev) => ({ ...prev, name: e.target.value }));
        }}
      />
      <div
        style={{
          height: 700,
          width: 400,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          overflow: "scroll",
          border: "solid",
        }}
      >
        {chat.map((message) => (
          <div style={{ margin: 0, padding: 0 }}>
            <span>
              <p>{message.message}</p> <p>-{message.name}</p>
            </span>
          </div>
        ))}
      </div>
      <TextField
        placeholder="message"
        style={{ width: 300 }}
        variant="outlined"
        value={message.message}
        onChange={(e) => {
          setMessage((prev) => ({ ...prev, message: e.target.value }));
        }}
      />
      <Button
        variant="contained"
        onClick={(e) => {
          e.preventDefault();
          socket.emit("message", message);
          setMessage((prev) => ({ ...prev, message: "" }));
        }}
      >
        Submit
      </Button>
    </div>
  );
}

export default App;
