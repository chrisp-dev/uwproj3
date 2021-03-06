import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";

import TextContainer from "../TextContainer";
import Messages from "../Messages";
import InfoBar from "../InfoBar";
import Input from "../Input";
import config from "../../utils/Constants";

import "./style.css";

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const ENDPOINT = config.API_URL;

  useEffect(() => {
    const { nameQ, roomQ } = queryString.parse(window.location.search);

    socket = io(ENDPOINT);

    setRoom(roomQ);
    setName(nameQ);

    socket.emit("join", { nameQ, roomQ }, error => {
      if (error) {
        alert(error);
      }
    });
  }, [ENDPOINT]);

  useEffect(() => {
    socket.on("message", message => {
      setMessages([...messages, message]);
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });

    return () => {
      socket.emit("disconnect");

      socket.off();
    };
  }, [messages]);

  const sendMessage = event => {
    event.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  return (
    <div className="outerContainer">
      <div className="myChatContainer">
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
      <TextContainer users={users} />
    </div>
  );
};

export default Chat;
