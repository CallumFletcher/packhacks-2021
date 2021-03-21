import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import "./ChatRoom.css";
import { useParams } from "react-router-dom";
import ChatSocketConection from "../ChatSocketConection";

<<<<<<< Updated upstream
function ChatRoom() {
  const room = useParams().roomId;
  const [message, setMessage] = useState({ message: "", name: "" });
  /*
  const [chat, setChat] = useState([]);
  */
  const { messages, sendMessage } = ChatSocketConection(room);
=======


function ChatRoom() {
  const room = useParams().roomId;
  const [message, setMessage] = useState({ message: "", name: "" });
  
  const { messages, sendMessage } = ChatSocketConection(room);
  
>>>>>>> Stashed changes

  const handleSendMessage = () => {
    console.log(message);
    sendMessage(message);
    setMessage((prev) => ({ ...prev, message: "" }));
  };

  return (
    <div
      className="chat-container-main"
      style={{
        height: "100vh",
        width: "100%",
        position: "relative",
      }}
    >
<<<<<<< Updated upstream
      <div
        className="chat-container-left"
        style={{
          height: "100vh",
          width: "100%",
          position: "relative",
        }}
      >
        <div
          className="chat-container-left"
          style={{
            backgroundColor: "white",
            position: "absolute",
            left: "40px",
            height: 600,
            top: "40%",
            marginTop: "-240px",
            width: 450,
            borderRadius: "5rem",
            overflowX: "hidden" /* Hide horizontal scrollbar */,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            rowGap: "10px",
          }}
        >
          <h1 className="room-name"> Wellcom to {room} </h1>
        </div>
=======

        <h1 className="room-name"> Wellcom to {room} </h1>
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
       
>>>>>>> Stashed changes
        <TextField
          syle={{
            paddingBottom: 10,
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
          style={{ width: 300, hight: 500 }}
          variant="outlined"
          value={message.message}
          onChange={(e) => {
            setMessage((prev) => ({ ...prev, message: e.target.value }));
          }}
        />
        <Button
          variant="contained"
          onClick={
            handleSendMessage
            /*
            socket.emit("from_room", room);
            socket.emit("message", ({ room, message }));
            */
          }
        >
          Submit
<<<<<<< Updated upstream
        </Button>
      </div>
      <div
        className="chat-container-right"
        style={{
          backgroundColor: "white",
          position: "absolute",
          display: "block",
          right: "40px",
          top: "40%",
          marginTop: "-240px",
          height: 600,
          width: 1000,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          overflow: "scroll",
          borderRadius: "5rem",
          overflowX: "hidden" /* Hide horizontal scrollbar */,
        }}
      >
        {messages.map((message) => (
          <div
            className="chat-element"
            style={{
              position: "relative",
              margin: 0,
              padding: 0,
              left: "40px",
            }}
          >
            <span id="users">
              <p>{message.messageBody.message}</p>{" "}
              <p>-{message.messageBody.name}</p>
            </span>
=======
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
      {messages && messages.map((message) => (
            <div className="chat-element" style={{ position: 'relative', margin: 0, padding: 0, left: '40px' }}>
              <span id ="users">
                {console.log(message)}
                <p>{message.messageBody.message}</p> <p>-{message.messageBody.name}</p>
                
              </span>
>>>>>>> Stashed changes
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChatRoom;
