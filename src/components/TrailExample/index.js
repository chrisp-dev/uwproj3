import React, { useState, useEffect } from 'react';
import { animated, useTrail } from 'react-spring';

/**
 * This is an example of the useTrail,
 * it displays the list of names under "Random User"
 */
export default function TrailExample() {
    // create state
    const [users, setUsers] = useState([]);

    // load data on page load and set state
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(response => response.json())
            .then(data =>
                setUsers(data)
            )
    }, [])

    // create "trail" of array with users and their new animations
    const trail = useTrail(users.length, {
        from: { marginLeft: -20, opacity: 0, transform: 'translate3d(0,-40px,0)' },
        to: { marginLeft: 20, opacity: 1, transform: 'translate3d(0,0px,0)' }
    })

    return (
        <React.Fragment>
            <h1>Random User</h1>
            {/** loop over the "trail" of animations and return the
             * animated.div for each user
             */}
            {trail.map((props, index) => {
                return (
                    <animated.div
                        key={users[index]}
                        style={props}
                        className="box"
                    >
                        {users[index].username}
                    </animated.div>
                )
            })}
        </React.Fragment>
    );
}