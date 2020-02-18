import React from 'react';
import MessageRow from './MessageRow';

export default function MessageBody (props) {
    return (
        <div>
            {/* TODO: ONLY SHOW FOR MATCHES WITH AN ACTIVE CHAT */}
            <MessageRow/>
            <MessageRow/>
            <MessageRow/>
        </div>
    )
}