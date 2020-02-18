import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useGesture } from 'react-use-gesture';

/**
 * This is my (Chris) first try at react-spring and react-use-gesture.
 * It can be used if improved.
 */
export default function Swiper() {
    const [{ x, y }, setSpring] = useSpring(() => ({ x: 0, y: 0 }));

    const bind = useGesture({
        onDrag: ({ down, movement: [mx, my] }) => { setSpring({ x: down ? mx : 0, y: down ? my : 0 }) },
        onMouseDown: (e) => { e.preventDefault(); console.log('mouse down') }
    });

    return <animated.div className="w-full h-full bg-yellow-500" {...bind()} style={{ x, y }}><img src="https://placekitten.com/200" />Hi</animated.div>
}