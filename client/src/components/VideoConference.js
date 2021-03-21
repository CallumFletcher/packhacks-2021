import React, { useContext } from "react";
import { store } from "../store.js";
import Jitsi from "react-jitsi";

function VideoConference(props) {
  const globalState = useContext(store);
  const roomName =
    "my-super-secret-meeting-123e4567-e89b-12d3-a456-426655440000";
  const name = globalState.state.username;

  const handleAPI = (JitsiMeetAPI) => {
    console.log(JitsiMeetAPI);
    console.log(globalState);
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
