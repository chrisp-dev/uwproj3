import React from "react";
import Wrapper from "../components/Wrapper";
import SwipeNav from "../components/SwipeNav";
import Footer from "../components/Footer";
import Matches from "../components/Matches";

function Edit() {
  return (
    <div className="h-full">
      <Wrapper>
        <SwipeNav transparent />
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage: "url('https://cdn.hipwallpaper.com/i/71/71/XBSFfT.jpg')"
          }}>
          <span id="blackOverlay" className="w-full h-full absolute opacity-50 bg-black"></span>
        </div>
        <Matches />
      </Wrapper>
      <Footer />
    </div>
  );
}
export default Edit;