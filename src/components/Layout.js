import React, { useState } from 'react';
import Messages from './Messages';
import Swiper from './Swiper';
import API from '../utils/API';

export default function Layout() {
    const [users, setUsers] = useState([
        { id: 1, first: "Chris", last: "P", roles: [{ guitar: 3, drums: 10, piano: 15, vocals: 20 }] },
        { id: 2, first: "Nina", last: "L", roles: [{ guitar: 3, drums: 10, piano: 15, vocals: 20 }] }
    ]);
    const [user, setUser] = useState(users[0]);

    const handleUserSwipe = (like) => {
        console.log('handle swipe');

        if (like) {
            API.postLike(users[0]);
        } else {
            API.postNope(users[0]);
        }
        users.shift();
        setUser(users[0] || null);
        setUsers(users);
    }
    function rend() {
        if (users.length && user) {
            return <Swiper user={user} setUsers={setUsers} handleUserSwipe={handleUserSwipe} />
        } else {
            return <h1>No users near you.</h1>
        }
    }
    return (
        <div className="container-fluid min-w-full flex min-h-screen bg-red-200" > {/* Container */}
            {/** App should probably be the Router stuff, this is layout stuff i know, TODO **/}
            < div className="bg-red-400 w-full sm:w-1/4" > {/** Left Column */}
                {/** TODO
         * if location.pathname /app/messages
         * return <Messages />
         */}
                {/* <Messages /> */}
            </div>
            <div className="bg-red-700 w-3/4 lg:w-1/2 hidden sm:flex justify-center">{/** Middle / Main */}

                {rend()}
            </div>
            <div className="bg-grey-400 md:w-1/4 hidden lg:block">{/** Right Column */}
                <h3>Right Column</h3>
            </div>
        </div>
    );
}