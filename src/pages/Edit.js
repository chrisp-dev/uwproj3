import React from "react";

import Wrapper from "../components/Wrapper";
import ProfileNav from "../components/ProfileNav";
import Footer from "../components/Footer";
import EditProfile from "../components/EditProfile";

function Edit() {
  return (
    <div>
      <Wrapper>
        <ProfileNav transparent />
        <EditProfile />
      </Wrapper>
      <Footer />
    </div>
  );
}
export default Edit;