import React, { useState } from "react";
import Jitsi from "react-jitsi";

function VideoConference(props) {
  const email = "cool@gmail.com";
  const name = "Cool Cool";
  const roomName = email + name;

  const handleAPI = (JitsiMeetAPI) => {
    console.log(JitsiMeetAPI);
  };

  return (
    <React.Fragment>
      <Jitsi
      //onAPILoad={handleAPI}
      //roomName={roomName}
      //displayName={name}
      //config={{ prejoinedPageEnabled: false }}
      />
    </React.Fragment>
  );
}

export default VideoConference;
