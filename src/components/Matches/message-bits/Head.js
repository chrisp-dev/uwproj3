import React from 'react';
import Image from './Image';
import './style.css'

export default function Head({ matches }) {
    return (
        <div className='row flex horizontal' style={{ backgroundColor: 'white' }}>
            {/* loads however many matches you have */}
            {matches ? matches.map(match => <Image image={match.imageUrl} name={match.firstName}/>) : null}
        </div>
    )
}