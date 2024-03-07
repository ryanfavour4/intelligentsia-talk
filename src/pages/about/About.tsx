import React from "react";
import Footer from "../../layout/Footer/Footer";
import Navbar from "../../layout/Navbar/Navbar";
import SubscribeMail from "../home/sections/subscribe-mail/SubscribeMail";
import AboutHeader from "./sections/about-header/AboutHeader";
import ConverseOurWorld from "./sections/converse-our-world/ConverseOurWorld";
import "./About.css";
import OurMission from "./sections/our-mission/OurMission";
import OurVision from "./sections/our-vision/OurVision";
import OurSections from "./sections/our-secrets/OurSections";

export default function About() {
    return (
        <>
            <Navbar />
            <AboutHeader />
            <ConverseOurWorld />
            <OurMission />
            <OurVision />
            <OurSections />
            <SubscribeMail />
            <Footer />
        </>
    );
}
