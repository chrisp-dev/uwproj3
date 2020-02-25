import React, { useEffect, useState } from "react";
import ProfileNav from "../components/ProfileNav";
import Wrapper from "../components/Wrapper";
import OptionSwipe from "../components/OptionSwipe";
import Swiper from '../components/Swiper';
import API from "../utils/API";

export default function SwipeTest() {
    const [user, setUser] = useState({
        id: 0,
        email: "",
        firstName: ""
    });

    const [detail, setDetail] = useState({
        zipcode: "",
        lastName: ""
    });

    const [img, setImg] = useState("")

    useEffect(function () {
        API.loggedinuser()
            .then(res => {
                setUser(res.data);
                API.getUser(res.data.id)
                    .then(detail => setDetail(detail.data));
            })
            .catch(err => console.log(err));
    }, []);

    useEffect(function () {
        console.log(user.id)
        if (user.id > 0) {
            API.singleImage(user.id)
                .then(img => setImg(img.data.imageUrl))
                .catch(err => console.log(err))
        }
    }, [user.id])
    return (
        <div>
            <Wrapper>
                <ProfileNav transparent />
                <main className="profile-page">
                    <section className="relative block" style={{ height: "1000px" }}>
                        <div className="absolute top-0 w-full h-full bg-center bg-cover" style={{ backgroundImage: "url('http://localhost:8080/images/music_notes.gif')" }}>
                            <Swiper>
                                <OptionSwipe  user={user} detail={detail} img={img} />
                            </Swiper>
                        </div>
                    </section>
                </main>
            </Wrapper>
        </div>
    );
}