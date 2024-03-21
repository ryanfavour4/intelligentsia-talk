/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import "./Home.css";
import Navbar from "../../layout/Navbar/Navbar";
import Hero from "./sections/hero/Hero";
// import InnovativeWord from "./sections/innovative-words/InnovativeWord";
// import HealingJourney from "./sections/healing-journey/HealingJourney";
import WisdomCards from "./sections/wisdom-cards/WisdomCards";
import SubscribeMail from "./sections/subscribe-mail/SubscribeMail";
import Footer from "../../layout/Footer/Footer";
import { useHome } from "./Home.controller";
import CeoIntro from "./sections/ceo-intro/CeoIntro";

export default function Home() {
    const { handlePlayPause, audioUrl } = useHome();

    return (
        <>
            <Navbar />
            <Hero handlePlayPause={handlePlayPause} />
            {/* <InnovativeWord /> */}
            {/* <HealingJourney /> */}
            <WisdomCards />
            <CeoIntro />
            <SubscribeMail />
            <Footer />
            <audio autoPlay id="audio">
                <source src={audioUrl} />
            </audio>
        </>
    );
}
