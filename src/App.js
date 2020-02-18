import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import Swipe from "./pages/Swipe";
// needs FA install
// import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
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
