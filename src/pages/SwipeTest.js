import React from "react";
import ProfileNav from "../components/ProfileNav";
import Wrapper from "../components/Wrapper";
import OptionSwipe from "../components/OptionSwipe";



export default function SwipeTest() {
    return (
        <div>
            <Wrapper>
            <ProfileNav transparent />
            <main className="profile-page">
            <section className="relative block" style={{ height: "1000px" }}>
                <div className="absolute top-0 w-full h-full bg-center bg-cover" style={{backgroundImage:"url('https://i.pinimg.com/originals/b3/71/b3/b371b32d4e77f5d45e3661284360d168.gif')"}}>
                    <OptionSwipe />
                    </div>
                    </section>
            </main>
            </Wrapper>
        </div>
    );
}