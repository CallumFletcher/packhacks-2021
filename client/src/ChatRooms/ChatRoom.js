import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { TextField, Button } from "@material-ui/core";
import "./ChatRoom.css";

const socket = io.connect("localhost:5000");
const chatName = "localhost:5000";

function ChatRoom(props) {
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
  <div className="chat-container-main"
      style={{
        height: '100vh',
        width: '100%',
        position: 'relative',
      }}
  >
    <div className="chat-container-left"
      style={{
        backgroundColor: 'white',
        position: 'absolute',
        left: '40px',
        height: 600,
        top: '40%',
        marginTop: '-240px',
        width: 450,
        borderRadius: '5rem',
        overflowX: 'hidden' /* Hide horizontal scrollbar */,
        display: 'flex',
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        rowGap: '10px',
      }}
    >
      <div className="leff-text-wrapper"
        style={{
          left: '40px',
        }}
      >
        <h1>{`Wellcome to ${chatName}`}</h1>
        </div>
          <TextField
            syle={{
               paddingBottom: 10 
              }}
            variant="outlined"
            placeholder="name"
            value={message.name}
            onChange={(e) => {
            setMessage((prev) => ({ ...prev, name: e.target.value }));
          }}
        />
          <TextField
            placeholder="message"
            multiline
            rows={10}
            
            style={{ width: 300, hight: 500,}}
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
    <div className="chat-container-right"
      style={{
        backgroundColor: 'white',
        position: 'absolute',
        display: 'block',
        right: '40px',
        top: '40%',
        marginTop: '-240px',
        height: 600,
        width: 1000,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        overflow: "scroll",
        borderRadius: '5rem',
        overflowX: 'hidden' /* Hide horizontal scrollbar */,
      }}
    >
      {chat.map((message) => (
            <div className="chat-element" style={{ position: 'relative', margin: 0, padding: 0, left: '40px' }}>
              <span>
                <p>{message.message}</p> <p>-{message.name}</p>
            </span>
          </div>
        ))}
    </div>
  </div>


  );
}

export default ChatRoom;
