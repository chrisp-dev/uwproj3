import React from "react";
import ProfileNav from "../components/ProfileNav";
import Wrapper from "../components/Wrapper";
import OptionSwipe from "../components/OptionSwipe";
import Swiper from '../components/Swiper';

export default function SwipeTest() {
    return (
        <div>
            <Wrapper>
                <ProfileNav transparent />
                <main className="profile-page">
                    <section className="relative block" style={{ height: "1000px" }}>
                        <div className="absolute top-0 w-full h-full bg-center bg-cover" style={{ backgroundImage: "url('http://localhost:8080/images/music_notes.gif')" }}>
                            <Swiper>
                                <OptionSwipe />
                            </Swiper>
                        </div>
                    </section>
                </main>
            </Wrapper>
        </div>
    );
}