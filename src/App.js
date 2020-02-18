import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import Swipe from "./pages/Swipe";
// needs FA install
// import "@fortawesome/fontawesome-free/css/all.min.css";
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
   <Router>
     <div>
       <Route exact path = "/" component ={Home} />
       <Route exact path = "/home" component ={Home} />
       <Route exact path = "/login" component ={Login} />
       <Route exact path = "/profile" component ={Profile} />
       <Route exact path = "/signup" component ={SignUp} />
       <Route exact path = "/swipe" component ={Swipe} />
     </div>
   </Router>
  );
}

export default App;
