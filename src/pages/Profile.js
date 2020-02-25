import React, { useState, useEffect } from "react";
import API from "../utils/API";
import ProfileNav from "../components/ProfileNav";
import ProfileCard from "../components/ProfileCard";

export default function Profile() {
  const [user, setUser] = useState({
    id: 0,
    email: "",
    firstName: ""
  });

  const [detail, setDetail] = useState({
    zipcode: "",
    lastName: ""
  });

  const [img, setImg] = useState("");

  useEffect(function() {
    API.loggedinuser()
      .then(res => {
        setUser(res.data);
        API.getUser(res.data.id).then(detail => setDetail(detail.data));
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(
    function() {
      if (user.id > 0) {
        API.singleImage(user.id)
          .then(img => {
            if (img.data) {
              setImg(img.data.imageUrl);
            }
          })
          .catch(err => console.log(err));
      }
    },
    [user.id]
  );

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
        <ProfileCard user={user} detail={detail} img={img} />
      </main>
    </>
  );
}
