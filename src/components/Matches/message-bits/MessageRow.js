import React, { useState, useEffect } from "react";
import Image from "./Image";
import API from "../../../utils/API";
import Wrapper from "../../Wrapper";
import Chat from "../../Chat";

export default function MessageRow({ image, name }) {
  const [userId, setUserId] = useState("");
  const [showCat, setShowCat] = useState(false);
  const [cName, setCName] = useState(name);
  // const [room, setRoom] = useState("");

  useEffect(
    function () {
      API.loggedinuser()
        .then(res => {
          setUserId(JSON.stringify(res.data.id));
          setCName(JSON.stringify(res.data.firstName));
        })
        .catch(err => {
          console.log(err);
        });
    }, [name]);

  function handleClick(event) {
    event.preventDefault();
    if (userId) {
      console.log(userId);
      // console.log(JSON.stringify(props.id));
      // setRoom(props.id + userId);
      // console.log("room:", room);
      //TODO: CHANGE HREF LINK ------------------------------------------------------------------
      // window.location.href = `http://localhost:3000/chat/chat?name=${name}&room=${room}`;
      setShowCat(true);
      // chat room name = userid + props id
      // chat participant name = props.name
    } else {
      console.log(":((((");
    }
    // TODO: need to get message recipient ID to create the name for the chat room.
  }

  return (
    <Wrapper>
      <div className="row flex h-12 bg-gray-400" onClick={handleClick}>
        <Image image={image} name={cName} matchDate="Yesterday 4:44pm" />
        {/* TODO: SOME MESSAGE PREVIEW HERE */}
        {/* <p>{props.preview}</p> */}
      </div>
      <main>{showCat ? <Chat name="room" room="1" /> : null}</main>
    </Wrapper>
  );
}
