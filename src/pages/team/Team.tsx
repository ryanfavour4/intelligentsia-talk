import React from "react";
import Ceo from "./sections/ceo/Ceo";
import Navbar from "../../layout/Navbar/Navbar";
import Footer from "../../layout/Footer/Footer";
import TeamHeader from "./sections/team-header/TeamHeader";

export default function Team() {
    return (
        <>
            <Navbar />
            <TeamHeader />
            <Ceo />
            <Footer />
        </>
    );
}
