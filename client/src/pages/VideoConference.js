import React from "react";
import Jitsi from "react-jitsi";

function VideoConference(props) {
  const roomName =
    "my-super-secret-meeting-123e4567-e89b-12d3-a456-426655440000";
  const name = "Joseph Strawberry";

  const handleAPI = (JitsiMeetAPI) => {
    console.log(JitsiMeetAPI);
  };

  return (
    <Jitsi
      onAPILoad={handleAPI}
      roomName={roomName}
      displayName={name}
      config={{ prejoinPageEnabled: false }}
    />
  );
}

export default VideoConference;
