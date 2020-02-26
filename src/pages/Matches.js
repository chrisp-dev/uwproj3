import React from "react";
import Wrapper from "../components/Wrapper";
import SwipeNav from "../components/SwipeNav";
import Footer from "../components/Footer";
import Matches from "../components/Matches";

function Edit() {
  return (
    <div>
      <Wrapper>
        <SwipeNav transparent />
        <Matches />
      </Wrapper>
      <Footer />
    </div>
  );
}
export default Edit;