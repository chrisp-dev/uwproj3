import React from 'react';

export default function Layout() {
    return (
        <div className="container-fluid min-w-full flex min-h-screen bg-red-200" > {/* Container */}
            {/** App should probably be the Router stuff, this is layout stuff i know, TODO **/}
            < div className="bg-green-400 w-full sm:w-1/4" > {/** Left Column */}
                {/** TODO
         * if location.pathname /app/messages
         * return <Messages />
         */}
                <Messages />
            </div>
            <div className="bg-blue-400 w-3/4 lg:w-1/2 hidden sm:flex justify-content">{/** Middle / Main */}
                <h3>Middle Column</h3>
                <Swiper />
                <Swiper />
            </div>
            <div className="bg-yellow-400 md:w-1/4 hidden lg:block">{/** Right Column */}
                <h3>Right Column</h3>
            </div>
        </div>
    );
}