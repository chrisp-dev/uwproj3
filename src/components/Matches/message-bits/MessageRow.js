import React, { useEffect } from 'react';
import Image from './Image';
import API from '../../../utils/API';

export default function MessageRow(props) {

    let userID = '';
    let name = "";
    let room = "";

    useEffect(function () {
        API.loggedinuser().then(res => {
            console.log(res.data)
            userID = JSON.stringify(res.data.id);
            name = JSON.stringify(res.data.firstName);
            console.log(userID)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    function handleClick(event) {
        event.preventDefault();
        console.log('weeeoeeeeoeee weeeeoeeeoeee')
        if (userID) {
            console.log(userID)
            console.log(JSON.stringify(props.id))
            room = props.id + userID;
            //TODO: CHANGE HREF LINK ------------------------------------------------------------------
            window.location.href = `http://localhost:3000/chat/chat?name=${name}&room=${room}`
            // chat room name = userid + props id
            // chat participant name = props.name
        } else {
            console.log(":((((")
        }
        // TODO: need to get message recipient ID to create the name for the chat room.
    }

    return (
        <div className='row flex' onClick={handleClick}>
            <Image image={props.image} />
            {/* TODO: SOME MESSAGE PREVIEW HERE */}
            <p>{props.preview}</p>
        </div>
    )
}