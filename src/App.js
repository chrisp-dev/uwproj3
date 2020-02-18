import React from "react";
import Messages from "./components/Messages";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Join from "./components/Join";
import Chat from "./components/Chat";
// import Deck from './components/Deck';
import Swiper from './pages/Swiper';

function App() {
  return (
    <div className="container-fluid min-w-full flex min-h-screen bg-red-200">
      <div className="bg-green-400 w-full sm:w-1/4">
        <Messages />
      </div>
      <div className="bg-blue-400 w-3/4 lg:w-1/2 hidden sm:block">
        <h3>Middle Column</h3>
        <Swiper />
      </div>
      <div className="bg-yellow-400 md:w-1/4 hidden lg:block">
        <h3>Right Column</h3>
        <Router>
          <Route path="/api/api/chat/join" component={Join} />
          <Route path="/api/api/chat/chat" component={Chat} />
        </Router>
      </div>
    </div>
  );
}

export default App;
