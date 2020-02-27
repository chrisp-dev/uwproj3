import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Messages from "./components/Messages";
import Join from "./components/Join";
import Chat from "./components/Chat";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import SwipeTest from "./pages/SwipeTest";
import Edit from "./pages/Edit";
import Matches from "./pages/Matches";
// import Swiper from "./components/Swiper";
import Layout from "./components/Layout";
import DisplayError from "./components/DisplayError";
// import API from "./utils/API";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/swipe" component={Layout} />
        <Route exact path="/error" render={props => <DisplayError {...props} errorMessage="wrong credintials" />} />
        <Route path="/chat/join" component={Join} />
        <Route path="/chat/chat" component={Chat} />
        <Route path="/test" component={Layout} />
        <Route path="/swipetest" component={SwipeTest} />
        <Route path="/edit" component={Edit} />
        <Route path="/matches" component={Matches} />
      </Switch>
    </Router>
  );
}

export default App;
