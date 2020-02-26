import React, { useEffect, useState } from "react";
import SwipeNav from "../components/SwipeNav";
import Wrapper from "../components/Wrapper";
import OptionSwipe from "../components/OptionSwipe";
import Swiper from "../components/Swiper";
import API from "../utils/API";
import Footer from "../components/Footer";
// import { config } from '../utils/Constants';

export default function SwipeTest() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});

  const handleUserSwipe = like => {
    if (like) {
      API.postLike(users[0]);
    } else {
      API.postNope(users[0]);
    }
    users.shift();
    setUser(users[0] || null);
    setUsers(users);
  };
  function rend() {
    if (users.length && user) {
      return (
        <Swiper user={user} setUsers={setUsers} handleUserSwipe={handleUserSwipe}>
          <OptionSwipe user={user} setUsers={setUsers} handleUserSwipe={handleUserSwipe} />
        </Swiper>
      );
    } else {
      return <h1 className="m-16 rounded-lg shadow-inner bg-white w-full p-10">No users near you.</h1>;
    }
  }

  useEffect(() => {
    API.loadSwipees()
      .then(data => {
        console.log("it worked?", data);
        setUsers(data.data);
        setUser(data.data[0] || null);
      })
      .catch(err => console.error(err));
  }, []);

  useEffect(
    function () {
      if (user && user.id > 0) {
        API.singleImage(user.id)
          .then(img => { })
          .catch(err => console.log(err));
      }
    },
    [user]
  );
  return (
    <div>
      <Wrapper>
        <SwipeNav transparent />
        <main className="profile-page">
          <section className="relative block" style={{ height: "1000px" }}>
            <div className="absolute top-0 w-full h-full bg-center bg-cover" style={{ backgroundImage: "url('music_notes.gif')" }}>
              {rend()}
            </div>
          </section>
        </main>
      </Wrapper>
      <Footer />
    </div>
  );
}
