import React from "react";
import Wrapper from "../components/Wrapper";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Landing from '../components/Landing';

function Home(){
    return(
        <div>
            <Wrapper>   
            <Navbar transparent />
            <Landing />
            </Wrapper>
            <Footer />
        </div>
    );
}
export default Home;