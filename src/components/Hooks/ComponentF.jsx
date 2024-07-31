import React, { useContext } from "react";
import { UserContext, ChannelContext } from "./UseContextHook";
const ComponentF = () => {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);
  return (
    <div>
      User Name:- {user} and Channel Name:- {channel}
    </div>
  );
};

export default ComponentF;
