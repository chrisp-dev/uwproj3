import React from 'react';
import Head from './message-bits/Head';
import MessageBody from './message-bits/MessageBody';
// import TrailExample from '../TrailExample';

/**
 * TODO: implement messaging
 * 1. Chris can help come up with detailed tasks
 * 2. Chris hopes these comments help
 */
// export default TrailExample;

export default function Messages (props) {
    return (
        <div>
            <Head/>
            <MessageBody/>
        </div>
    )
}