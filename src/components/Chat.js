import { Avatar, IconButton } from "@material-ui/core";
import MicIcon from "@material-ui/icons/Mic";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { AttachFile, MoreVert, SearchOutlined } from "@material-ui/icons";

import React, { useEffect, useState } from "react";

import "./Chat.css";

const Chat = () => {
  const [input, setInput] = useState("");
  const [seed, setSeed] = useState(" ");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const senMassege = (e) => {
    e.preventDefault();
    console.log(input);
    setInput("");
  };

  const onInputChange = ({ target }) => {
    const { value } = target;
    setInput(value);
  };
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
          <input
            value={input}
            onChange={onInputChange}
            type="text"
            placeholder="Type a massege"
          />
          <button onClick={senMassege} type="submit">
            Send a massage
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
};

export default Chat;
