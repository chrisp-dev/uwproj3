import React from 'react';
import Image from './Image';
import './style.css'

export default function Head({ matches }) {
    return (
        <div className='row flex horizontal' style={{ backgroundColor: 'white' }}>
            {/* TODO: make it so that it loads however many matches you have */}
            {matches ? matches.map(match => <Image image={match.image} />) : null}
        </div>
    )
}