import React from "react";

import Wrapper from "../components/Wrapper";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SignIn from "../components/SignIn";






function SignUp(){
    return(
       
    <div>

       <Wrapper>
        <Navbar transparent/>
        <SignIn />
       </Wrapper> 
        <Footer />
    </div>
       
    );
}
export default SignUp;