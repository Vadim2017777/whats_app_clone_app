import { Avatar, IconButton } from "@material-ui/core";
import MicIcon from "@material-ui/icons/Mic";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { AttachFile, MoreVert, SearchOutlined } from "@material-ui/icons";

import React, { useEffect, useState } from "react";

import "./Chat.css";

const Chat = () => {
  const [seed, setSeed] = useState(" ");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="chat__headerInfo">
          <h3>Room name</h3>
          <p>Last seen at..</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        <p className={`chat_message ${false && `chat__reciever`}`}>
          <span className="chat__name">VADIM</span>
          Chat messahe
          <span className="chat__timestamp">3:56pm</span>
        </p>
      </div>

      <div className="chat__footer">
        <InsertEmoticonIcon />

        <form>
          <input type="text" />
          <button>Send a massage</button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
};

export default Chat;
