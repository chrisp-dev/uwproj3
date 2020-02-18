import React from 'react';
import Image from './Image';
import './style.css'

export default function Head (props) {
    return (
        <div className='row flex horizontal'>
            {/* TODO: make it so that it loads however many matches you have */}
            <Image image={props.message.image}/>
            <Image image={props.message.image}/>
            <Image image={props.message.image}/>
            {/* <Image message={props.message}/> */}
            {/* <Image message={props.message}/> */}
        </div>
    )
}