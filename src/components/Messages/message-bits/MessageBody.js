import React from 'react';
import MessageRow from './MessageRow';
import './style.css'

export default function MessageBody (props) {
    return (
        <div className='vertical'>
            {/* TODO: ONLY SHOW FOR MATCHES WITH AN ACTIVE CHAT */}
            <MessageRow {...props.message}/>
            {/* <MessageRow {props.message}/> */}
            {/* <MessageRow {props.message}/> */}
        </div>
    )
}