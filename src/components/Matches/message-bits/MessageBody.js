import React from 'react';
import MessageRow from './MessageRow';
import './style.css'

export default function MessageBody({ messages }) {
    return (
        <div className='vertical'>
            {/* TODO: ONLY SHOW FOR MATCHES WITH AN ACTIVE CHAT */}
            {/* <MessageRow {...props.message}/> */}
            {messages ? messages.map(message => <MessageRow key={message.id} message={message} image={'https://ca.slack-edge.com/TQ1KWR5HU-UQKNHH7QE-5caa6237aac7-512'} name={'nate'} />) : null}
        </div>
    )
}