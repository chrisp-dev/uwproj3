import React from 'react';
import Image from './Image'

export default function MessageRow (props) {
    return (
        <div className='row flex'>
            <Image image={props.image}/>
            {/* TODO: SOME MESSAGE PREVIEW HERE */}
            <p>{props.preview}</p>
        </div>
    )
}