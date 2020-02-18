import React from 'react';
// import Swiper from './pages/Swiper';
// import Deck from './components/Deck';
// import { BrowserRouter, Route } from 'react-router-dom'; // TODO
import Messages from './components/Messages';
import './App.css';
import Swiper from './pages/Swiper';

function App() {
  /**
   * Right now this is returning a responsive layout
   * this is Chris, I think this needs to be improved upon, but hopefully
   * it's a decent start. 
   * TODO:
   * 1. Create a layout component to move this code to
   * 2. Add <BrowserRouter></BrowserRouter> stuff to this component
   * 3. Ask for help early and often :)
   */
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
      <div className="bg-blue-400 w-3/4 lg:w-1/2 hidden sm:block">{/** Middle / Main */}
        <h3>Middle Column</h3>
        <Swiper />
      </div>
      <div className="bg-yellow-400 md:w-1/4 hidden lg:block">{/** Right Column */}
        <h3>Right Column</h3>
      </div>
    </div>
  );
}

export default App;
