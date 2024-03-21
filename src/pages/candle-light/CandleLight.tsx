import React from "react";
import Footer from "../../layout/Footer/Footer";
import Navbar from "../../layout/Navbar/Navbar";
import CandleLightHeader from "./sections/candle-light-header/CandleLightHeader";
import WelcomeDescription from "./sections/welcome-description/WelcomeDescription";

export default function CandleLight() {
    return (
        <>
            <Navbar />
            <CandleLightHeader />
            <WelcomeDescription />
            <Footer />
        </>
    );
}
