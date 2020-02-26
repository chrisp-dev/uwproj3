import React from 'react';
import './style.css'

export default function Image({ image, name, matchDate }) {
    return (
        <div class="flex items-center">
            <img class="w-10 h-10 rounded-full mr-4" src={image} alt={name} />
            <div class="text-sm">
                <p class="text-gray-900 leading-none">{name || "Jack Black"}</p>
                <p class="text-gray-600">{matchDate || "Today 3:53pm"}</p>
            </div>
        </div>
    )
}