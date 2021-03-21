import React, { useContext } from "react";
import { store } from "../store.js";
import Jitsi from "react-jitsi";

function VideoConference(props) {
  const globalState = useContext(store);
  const roomName = props.room;
  const name = globalState.state.username;

  const handleAPI = (JitsiMeetAPI) => {
    console.log(JitsiMeetAPI);
  };

  return (
    <React.Fragment>
      <Jitsi
        onAPILoad={handleAPI}
        roomName={roomName}
        displayName={name}
        config={{ prejoinPageEnabled: false }}
      />
    </React.Fragment>
  );
}

export default VideoConference;
