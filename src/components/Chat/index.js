import React, { useState, useEffect } from "react";
import "./style.css";
import io from "socket.io-client";
import queryString from "query-string";

let socket;

export default function Chat({ location }) {
  const [senderName, setSenderName] = useState("");
  const [receiverName, setReceiverName] = useState("");
  const ENDPOINT = "localhost:8080";

  useEffect(() => {
    const { senderName, receiverName } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    console.log(socket);

    setSenderName(senderName);
    setReceiverName(receiverName);

    socket.emit("join", { senderName, receiverName }, () => {});

    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [ENDPOINT, location.search]);

  return (
    <div className="Chat">
      <h1>Chat Component</h1>
    </div>
  );
}
