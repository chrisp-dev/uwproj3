import React from 'react';
import './style.css'

export default function Image(props) {
    return (
        // TODO: TAKE IMAGE FROM PROFILE WE TAKE IN PROPS
        <div>
            <img src={props.image} className="bio-image" alt="pic"></img>
            <p>{props.name}</p>
        </div>
    )
}