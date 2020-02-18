import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";

export default function Join() {
  const [senderName, setSenderName] = useState("");
  const [receiverName, setReceiverName] = useState("");

  return (
    <div className="outerJoinComponent">
      <div className="innerJoinContainer">
        <h1 className="heading">Join Component</h1>
        <input placeholder="Sender" className="joinInput" type="text" onChange={e => setSenderName(e.target.value)} />
        <input placeholder="Receiver" className="joinInput" type="text" onChange={e => setReceiverName(e.target.value)} />
        <Link to={`/api/api/chat/chat?senderName=${senderName}&receiverName=${receiverName}`}>
          <button className="button" type="submit">
            Join Chat
          </button>
        </Link>
      </div>
    </div>
  );
}
