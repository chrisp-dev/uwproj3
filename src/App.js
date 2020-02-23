import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Messages from "./components/Messages";
import Join from "./components/Join";
import Chat from "./components/Chat";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import SwipeTest from "./pages/SwipeTest";
import Swiper from "./components/Swiper";
import Layout from "./components/Layout";
// import API from "./utils/API";

function App() {
  // useEffect(function() {
  //   API.loggedinuser()
  //     .then(res => {
  //       console.log(res.data);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          {/* <Route exact path="/logout" component={API.logout} /> 
          <Route path="/app">*/}
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/swipe" component={Layout} />
          <Route path="/chat/join" component={Join} />
          <Route path="/chat/chat" component={Chat} />
          <Route path="/test" component={Layout} />
          <Route path="/swipetest" component={SwipeTest} />
          {/*</Route>*/}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
