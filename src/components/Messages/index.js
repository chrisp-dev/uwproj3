import React, {useState} from 'react';
import Head from './message-bits/Head';
import MessageBody from './message-bits/MessageBody';
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

export default function Messages (props) {

    const [messages, setMessage] = useState([
        {
            id: 1,
            name: 'Nate',
            preview: 'some message preview',
            image: 'https://ca.slack-edge.com/TQ1KWR5HU-UQKNHH7QE-5caa6237aac7-512'
        }
    ])

    return (
        <div>
            <Head message={messages[0]}/>
            <MessageBody message={messages[0]}/>
        </div>
    )
}

// const Messages = ({ messages, name }) => (
//   <ScrollToBottom className="messages">
//     {messages.map((message, i) => (
//       <div key={i}>
//         <Message message={message} name={name} />
//       </div>
//     ))}
//   </ScrollToBottom>
// );

// export default Messages;
