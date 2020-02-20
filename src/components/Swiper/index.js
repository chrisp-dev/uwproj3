import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { useGesture } from 'react-use-gesture';
import Square from '../Square';

// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = i => ({ x: 0, y: i * -4, scale: 1, rot: -10 + Math.random() * 20, delay: i * 100 })
const from = i => ({ x: 0, rot: 0, scale: 1.5, y: -1000 })
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r, s) => `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`

/**
 * This is my (Chris) first try at react-spring and react-use-gesture.
 * It can be used if improved.
 */
export default function Swiper(props) {
    const { user, setUsers, handleUserSwipe } = props;
    const [swipe, setSwipe] = useState({ nope: false, like: false });
    const [{ x, y }, setSpring] = useSpring(() => ({ x: 0, y: 0 }));

    const bind = useGesture({
        onDrag: ({ event, down, movement: [mx, my], velocity, direction: [xDir] }) => {
            const dir = xDir < 0 ? -1 : 1 // Direction should either point left or right

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
            // if velocity and minimum x, fly out and send action
            if (velocity > 0.4 && !down) {
                console.log('whip it good', swipe);
                // set animation to fly out

                // return { x: (200 + window.innerWidth) * dir, rot: mx / 100 + (dir * 10 * velocity), scale: down ? 1.1 : 1 }
                return handleUserSwipe(true);
            }

            setSpring({ x: down ? mx : 0, y: down ? my : 0 });
        },
        onMouseDown: (e) => { e.preventDefault(); console.log('mouse down') },
        onClick: (e) => { }
    });

    return (
        <animated.div className="inset-0 m-auto w-full h-full max-h-md max-w-md bg-yellow-500" {...bind()} style={{ x, y }}>
            <div className="relative w-full h-full max-h-screen">
                <img className="w-full h-3/4 relative" src="https://placekitten.com/400" />
                <div className="relative inset-x-0 bottom-0 w-20 h-20">{user.first} {user.last}</div>

                <animated.div className="absolute top-0 right-0 h-16 w-auto" style={{ opacity: swipe.like ? swipe.op : 0 }}><Square text="LIKE" /></animated.div>
                <animated.div className="absolute left-0 top-0 h-16 w-auto" style={{ opacity: swipe.nope ? swipe.op : 0 }}><Square text="NOPE" /></animated.div>
                <button className="button rounded-lg bg-blue-800" onClick={() => { setSwipe({ nope: true }); handleUserSwipe(false) }}>Nope!</button>
                <button className="button rounded-lg bg-blue-800" onClick={() => handleUserSwipe(true)}>Like!</button>
            </div>
        </animated.div>
    )
}