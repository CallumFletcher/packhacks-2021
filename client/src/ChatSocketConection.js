import { useEffect, useRef, useState } from "react";
import socketIOClient from "socket.io-client";

<<<<<<< Updated upstream
const SOCKET_SERVER_URL = "/";
=======

const SOCKET_SERVER_URL = "http://localhost:5000";
>>>>>>> Stashed changes

const ChatSocketConection = (roomId) => {
  const [messages, setMessages] = useState([]);
  const socketRef = useRef();

  useEffect(() => {
    // Creates a WebSocket connection
    socketRef.current = socketIOClient(SOCKET_SERVER_URL, {
      query: { roomId },
    });

    // Listens for incoming messages
    socketRef.current.on("newChatMessage", (message) => {
      console.log(message);
      setMessages((messages) => [...messages, message]);
    });

    // Destroys the socket reference
    // when the connection is closed
    return () => {
      socketRef.current.disconnect();
    };
  }, [roomId]);

  // Sends a message to the server that
  // forwards it to all users in the same room
  const sendMessage = (messageBody) => {
    socketRef.current.emit("newChatMessage", {
      messageBody,
    });
  };

  return { messages, sendMessage };
};

export default ChatSocketConection;
