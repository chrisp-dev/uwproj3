import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { useGesture } from 'react-use-gesture';
import Square from '../Square';

/**
 * This is my (Chris) first try at react-spring and react-use-gesture.
 * It can be used if improved.
 */
export default function Swiper() {
    const [users, setUsers] = useState([]);
    const [swipe, setSwipe] = useState({ nope: false, like: false });
    const [{ x, y }, setSpring] = useSpring(() => ({ x: 0, y: 0 }));

    const bind = useGesture({
        onDrag: ({ down, movement: [mx, my], velocity }) => {
            // if velocity and minimum x, fly out and send action
            if (velocity > 0.4 && !down) {
                console.log('whip it good');
            }
            if (mx > 0) {
                // show like
                setSwipe({ like: true, op: mx / 150 });
                // send like to server
                // dispose of current card
            } else if (mx < 0) {
                // show nope
                setSwipe({ nope: true, op: -mx / 170 });
            }
            if (!down) {
                // reset like/nope display
                setSwipe({});
            }
            // ok ok ok, we can check the +-mx value
            // if > 5 begin to show the Like stamp
            // if < -5 begin to show the Nope stamp
            // if my < -5 begin to show the Superlike stamp

            // if down && velocity > 0.2 and mx > 5 : post like to server
            // if down && velocity > 0.2 and mx < -5 : post nope to server
            setSpring({ x: down ? mx : 0, y: down ? my : 0 });
        },
        onMouseDown: (e) => { e.preventDefault(); console.log('mouse down') }
    });

    return (
        <animated.div className="absolute inset-0 left-auto right-auto m-auto w-full h-full max-h-md max-w-md bg-yellow-500" {...bind()} style={{ x, y }}>
            <div className="relative w-full h-full max-h-screen">
                <img className="w-full h-full absolute" src="https://placekitten.com/400" />Hi

                <animated.div className="absolute top-0 right-0 h-16 w-auto" style={{ opacity: swipe.like ? swipe.op : 0 }}><Square text="LIKE" /></animated.div>
                <animated.div className="absolute left-0 top-0 h-16 w-auto" style={{ opacity: swipe.nope ? swipe.op : 0 }}><Square text="NOPE" /></animated.div>
            </div>
        </animated.div>)
}