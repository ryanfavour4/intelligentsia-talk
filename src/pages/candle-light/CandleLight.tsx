import React from "react";
import Footer from "../../layout/Footer/Footer";
import Navbar from "../../layout/Navbar/Navbar";
import CandleLightHeader from "./sections/candle-light-header/CandleLightHeader";
import HeartFelt from "./sections/heart-felt/HeartFelt";
// import WelcomeDescription from "./sections/welcome-description/WelcomeDescription";
// import PastGreats from "./sections/past-greats/PastGreats";

export default function CandleLight() {
    return (
        <>
            <Navbar />
            <CandleLightHeader />
            <HeartFelt />
            {/* <WelcomeDescription /> */}
            {/* <PastGreats /> */}
            <Footer />
        </>
    );
}
