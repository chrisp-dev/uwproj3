import Messages from "./components/Messages";
import Join from "./components/Join";
import Chat from "./components/Chat";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import SwipeTest from "./pages/SwipeTest";
import Swiper from "./components/Swiper";
import Layout from './components/Layout';
import API from './utils/API';

function App() {

  useEffect(function () {
    API.loggedinuser().then(res => {
      console.log(res.data)
    }).catch(err => {
      console.log(err)
    })
  }, [])

  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/logout" component={API.logout} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/swipe" component={Layout} />
        <Route path="/chat/join" component={Join} />
        <Route path="/chat/chat" component={Chat} />
        <Route path="/swipetest" component={SwipeTest} />
        <Route path='/test' component={Layout} />
      </div>
    </Router>
  );
}

export default App;
