import React from "react";

import Wrapper from "../components/Wrapper";
import AltNav from "../components/AltNav";
import Footer from "../components/Footer";
import LoginForm from "../components/LoginForm";
// import ErrorBoundary from "../components/Error";

function Login() {
  return (
    <div className="h-full">
      <Wrapper>
        <AltNav transparent />
        <LoginForm />
      </Wrapper>
      <Footer />
    </div>
  );
}
export default Login;
