import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import io from "socket.io-client";
import { TextField, Button } from "@material-ui/core";
import axios from "axios";
import VideoConference from "../components/VideoConference";
import { store } from "../store.js";

//for local testing, change to localhost:5000
//the react proxy doesn't like socket connections
const socket = io.connect("/");

function Lobby(props) {
  const [message, setMessage] = useState({ message: "", name: "" });
  const [chat, setChat] = useState([]);

  const history = useHistory();

  const globalState = useContext(store);

  const { id } = useParams();

  useEffect(() => {
    const userName = globalState.state.username;
    axios
      .patch(`/api/room/subscribe/${id}`, {
        username: userName,
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
    socket.on("message", (message) => {
      setChat((prev) => [...prev, message]);
      console.log(message);
    });

    const memes = async () => {
      const userName = globalState.state.username;
      console.log("NICE");
      await axios
        .patch(`/api/room/unsubscribe/${id}`, {
          username: userName,
        })
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    };

    return () => memes();
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
      <VideoConference />
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
      <Button
        variant="contained"
        onClick={() => {
          history.push("/map");
        }}
      >
        Nice
      </Button>
    </div>
  );
}

export default Lobby;
