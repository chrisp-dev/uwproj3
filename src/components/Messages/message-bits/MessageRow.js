import React, { useEffect } from 'react';
import Image from './Image';
import API from '../../../utils/API';

export default function MessageRow(props) {

    useEffect(function () {
        API.loggedinuser().then(res => {
            console.log(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    function handleClick(event) {
        event.preventDefault();
        // console.log(req.session.user)
        console.log('weeeoeeeeoeee weeeeoeeeoeee')
        // TODO: need to get both session ID and message recipient ID
        //       to create the name for the chat room. if that combo already exists, then add + 1
        //       to the name combo.
    }

    return (
        <div className='row flex' onClick={handleClick}>
            <Image image={props.image} />
            {/* TODO: SOME MESSAGE PREVIEW HERE */}
            <p>{props.preview}</p>
        </div>
    )
}