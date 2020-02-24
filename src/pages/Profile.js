import React, { useState, useEffect } from "react";
import API from "../utils/API";
// import AltNav from "../components/AltNav";
import ProfileNav from "../components/ProfileNav";
import ProfileCard from "../components/ProfileCard";
// other card options,dont remove
// import Contact from "../components/Contact";
// import TeamPage from "../components/TeamPage";
// import FinalCard from "../components/FinalCard";
// import OtherCard from "../components/OtherCard";

export default function Profile(props) {
  const [user, setUser] = useState({
    id: 0,
    email: "",
    firstName: ""
  });

  const [detail, setDetail] = useState({
    zipcode: "",
    lastName: "",
    imgURL: ""
  });

  useEffect(function() {
    API.loggedinuser()
      .then(res => {
        setUser(res.data);
        API.getUser(res.data.id).then(detail => setDetail(detail.data));
      })
      .then(res => {
        API.singleImage(res.data.id).then(detail => setDetail(detail.data));
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <ProfileNav transparent />
      <main className="profile-page">
        <section className="relative block" style={{ height: "500px" }}>
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: "url('https://cdn.hipwallpaper.com/i/71/71/XBSFfT.jpg')"
            }}
          >
            <span id="blackOverlay" className="w-full h-full absolute opacity-50 bg-black"></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px", transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon className="text-black fill-current" points="2560 0 2560 100 0 100"></polygon>
            </svg>
          </div>
        </section>
        {/* different types of cards, dont remove */}
        {/* <OtherCard /> */}
        {/* <FinalCard /> */}
        {/* <Contact /> */}
        {/* <TeamPage/> */}
        <ProfileCard user={user} detail={detail} />
      </main>
    </>
  );
}
