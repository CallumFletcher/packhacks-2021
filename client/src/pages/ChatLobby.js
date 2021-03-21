import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import io from "socket.io-client";
import {
  TextField,
  Button,
  makeStyles,
  Switch,
  Typography,
} from "@material-ui/core";
import axios from "axios";
import VideoConference from "../components/VideoConference";
import { store } from "../store.js";
import { Paper } from "@material-ui/core";
import { Grid } from "@material-ui/core";

//for local testing, change to localhost:5000
//the react proxy doesn't like socket connections
const useStyles = makeStyles({
  root: {
    display: "grid",
    gridTemplateColumns: "60% 40%",
    gridTemplateRows: "70% 30%",
  },
  video: {
    gridColumnStart: 1,
    gridColumnEnd: 1,
    gridRowStart: 1,
    gridRowEnd: 1,
  },
  chat: {
    gridColumnStart: 2,
    gridRowStart: 1,
    width: "100%",
    height: "100%",
  },
});

const socket = io.connect("/");

function Lobby(props) {
  const [showVideo, setShowVideo] = useState(false);
  const classes = useStyles();
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [roomInfo, setRoomInfo] = useState(null);

  const history = useHistory();

  const globalState = useContext(store);

  const { id } = useParams();

  const handleMessage = (event) => {
    setMessage(event.target.value);
  };

  const handleUpdateChat = () => {
    //setChat((chat) => [...chat, message]);
    socket.emit("message", { message: message, id: id });
    console.log("HANDLE UPDATE CHAT");
    setMessage("");
  };

  useEffect(() => {
    const userName = globalState.state.username;
    console.log("1");
    axios
      .patch(`http://localhost:5000/api/room/subscribe/${id}`, {
        username: userName,
      })
      .then((response) => {})
      .catch((error) => console.log(error));
    axios.get(`http://localhost:5000/api/room/z/${id}`).then((response) => {
      setRoomInfo(response.data);
    });

    socket.on("message", (message) => {
      if (message.id === id) {
        console.log(message.message, "FINALLY");
        setChat((prev) => [...prev, message.message]);
      }
      //console.log([...chat, message]);
    });

    const memes = async () => {
      const userName = globalState.state.username;
      console.log("NICE");
      await axios
        .patch(`localhost:5000/api/room/unsubscribe/${id}`, {
          username: userName,
        })
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    };

    return () => memes();
  }, []);

  return (
    <div classname={classes.root}>
      <Grid container>
        <Grid item xs={6}>
          <div className={classes.video}>
            <div
              style={{
                paddingLeft: "40%",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography variant="body1">Show Video: </Typography>
              <Switch
                checked={showVideo}
                onChange={() => setShowVideo(!showVideo)}
                name="checkedA"
                label="Show Video"
              />{" "}
            </div>

            {showVideo && <VideoConference room={id} />}
            {roomInfo && (
              <Paper elevation={2} style={{ padding: 15 }}>
                <Typography variant="h5" style={{ fontWeight: 700 }}>
                  {`Room Name: ${roomInfo.name}`}
                </Typography>
                <Typography variant="body1">Students Online</Typography>
                <Grid container>
                  {roomInfo.subscriberList.map((user) => (
                    <Grid item xs={12} sm={6} md={4}>
                      <Typography variant="body1">{`• ${user}`}</Typography>
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            )}
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className={classes.chat}>
            <Paper
              elevation={2}
              style={{
                padding: 15,
                margin: 15,
                height: "100%",
                maxHeight: 800,
                minHeight: 500,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Typography
                variant="h5"
                align="center"
                style={{ marginBottom: 10 }}
              >
                Chat Log
              </Typography>
              <Grid
                container
                style={{ marginBottom: 20, flexGrow: 100, overflow: "scroll" }}
                spacing={1}
              >
                {chat.map((message) => (
                  <Grid item xs={12}>
                    <Paper elevation={12} style={{ padding: 10 }}>
                      <Typography variant="body1">{message}</Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
              <div
                style={{
                  paddingTop: 25,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <TextField
                  size="small"
                  placeholder="message"
                  style={{ width: "80%" }}
                  variant="outlined"
                  value={message}
                  onChange={handleMessage}
                />
                <Button
                  variant="contained"
                  onClick={(e) => {
                    e.preventDefault();
                    handleUpdateChat();
                  }}
                  disabled={!message}
                >
                  Send
                </Button>
              </div>

              {/* {chat.map((message) => (
                <div style={{ margin: 0, padding: 0 }}>
                  <span>
                    <p>{message}</p>
                  </span>
                </div>
              ))} */}
            </Paper>
          </div>
        </Grid>
      </Grid>

      {/* <div
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
              <p>{message}</p>
            </span>
          </div>
        ))}
      </div>
      <TextField
        placeholder="message"
        style={{ width: 300 }}
        variant="outlined"
        value={message}
        onChange={handleMessage}
      />
      <Button
        variant="contained"
        onClick={(e) => {
          e.preventDefault();
          handleUpdateChat();
        }}
      >
        Send
      </Button>
      <br />
      <Button
        variant="contained"
        onClick={() => {
          history.push("/map");
        }}
      >
        Nice
      </Button> */}
    </div>
  );
}

export default Lobby;
