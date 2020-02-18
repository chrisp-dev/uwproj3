import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { useGesture } from 'react-use-gesture';
import Square from '../../components/Square';

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
        <animated.div className="m-auto w-full h-full max-w-md bg-yellow-500" {...bind()} style={{ x, y }}>
            <animated.div style={{ opacity: swipe.like ? swipe.op : 0 }}><Square x={x} text="LIKE" /></animated.div>
            <animated.div style={{ opacity: swipe.nope ? swipe.op : 0 }}><Square x={x} text="NOPE" /></animated.div>
            <img src="https://placekitten.com/200" />Hi
        </animated.div>)
}