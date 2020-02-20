import React, { useEffect } from 'react';
import Image from './Image';
import API from '../../../utils/API';

export default function MessageRow(props) {

    let userID = '';

    useEffect(function () {
        API.loggedinuser().then(res => {
            // console.log(res.data.id)
            userID = JSON.stringify(res.data.id);
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