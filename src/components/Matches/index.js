import React, {useState} from 'react';
import Head from './message-bits/Head';
import MessageBody from './message-bits/MessageBody';

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
