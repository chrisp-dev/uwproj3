import React from 'react';
import ScrollToBottom from "react-scroll-to-bottom";
import Message from "./Message";
import "./style.css";
// import TrailExample from '../TrailExample';

/**
 * TODO: implement messaging
 * 1. Chris can help come up with detailed tasks
 * 2. Chris hopes these comments help
 */
// export default TrailExample;

const Messages = ({ messages, name }) => (
  <ScrollToBottom className="messages">
    {messages.map((message, i) => (
      <div key={i}>
        <Message message={message} name={name} />
      </div>
    ))}
  </ScrollToBottom>
);

export default Messages;
