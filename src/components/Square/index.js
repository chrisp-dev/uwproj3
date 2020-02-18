import React from 'react';

export default function Square(props) {

    return (
        <div className="w-20 h-20 bg-blue-500">
            {props.text}
        </div>
    )
}