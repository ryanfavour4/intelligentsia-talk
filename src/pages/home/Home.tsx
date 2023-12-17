/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "./components/Hero";
import InnovativeWord from "./components/InnovativeWord";
import HealingJourney from "./components/HealingJourney";
import WisdomCards from "./components/WisdomCards";
import SubscribeMail from "./components/SubcribeMail";
import Footer from "../../components/Footer/Footer";

export default function Home() {
    const { handlePlayPause, audioUrl } = useHome();

    return (
        <>
            <Navbar />
            <Hero handlePlayPause={handlePlayPause} />
            <InnovativeWord />
            <HealingJourney />
            <WisdomCards />
            <SubscribeMail />
            <Footer />
            <audio autoPlay id="audio">
                <source src={audioUrl} />
            </audio>
        </>
    );
}

const useHome = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioUrl = "/audio/bg-music.mp3";

    useEffect(() => {
        var audio: any = document.getElementById("audio");
        audio.volume = 0.1;
        audio.loop = true;
    }, []);

    const handlePlayPause = () => {
        var audio: any = document.getElementById("audio");
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying(!isPlaying);
    };

    return { handlePlayPause, audioUrl };
};
