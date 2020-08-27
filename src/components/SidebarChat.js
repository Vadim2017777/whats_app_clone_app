import React, { useEffect, useState } from "react";

import "./SidebarChat.css";
import { Avatar } from "@material-ui/core";

function SidebarChat() {
  const [seed, setSeed] = useState(" ");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  return (
    <div className="SidebarChat">
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
      <h2>Room name</h2>
      <p>Last message</p>
    </div>
  );
}

export default SidebarChat;
