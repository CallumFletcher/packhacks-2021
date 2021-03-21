import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [roomName, setRoomName] = React.useState("");


  const handleRoomNameChange = (e) => {
    setRoomName(e.target.value);
  };



  return (
    <div>
        
        <div className="room-input-container">
            
            <label for="room">Room</label>
            <input
                type="text"
                placeholder="Room"
                id = "room"
                value={roomName}
                onChange={handleRoomNameChange}
                className="join-chatroom-input"
            />
            <Link to={`/${roomName}`} className="enter-chatroom-link">
                Join room
            </Link>
        </div>
    </div>
  );
}

export default Home;