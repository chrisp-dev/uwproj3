import React, { useState, useEffect } from "react";
import Image from "./Image";
import API from "../../../utils/API";
import config from "../../../utils/Constants";

export default function MessageRow(props) {
  const [userId, setUserId] = useState("");
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  useEffect(function() {
    API.loggedinuser()
      .then(res => {
        setUserId(JSON.stringify(res.data.id));
        setName(JSON.stringify(res.data.firstName));
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  function handleClick(event) {
    event.preventDefault();
    if (userId) {
      console.log(userId);
      console.log(JSON.stringify(props.id));
      setRoom(props.id + userId);
      window.location.href = `${config.API_URL}/chat/chat?name=${name}&room=${room}`;
      // chat room name = userid + props id
      // chat participant name = props.name
    } else {
      console.log(":((((");
    }
    // TODO: need to get message recipient ID to create the name for the chat room.
  }

  return (
    <div className="row flex" onClick={handleClick} style={{ backgroundColor: "white" }}>
      <Image image={props.image} />
      {/* TODO: SOME MESSAGE PREVIEW HERE */}
      <p>{props.preview}</p>
    </div>
  );
}
