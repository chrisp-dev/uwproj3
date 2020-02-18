import React from 'react';
import Image from './Image';

export default function Head (props) {
    return (
        <div class='row'>
            {/* TODO: make it so that it loads however many matches you have */}
            <Image/>
            <Image/>
            <Image/>
        </div>
    )
}