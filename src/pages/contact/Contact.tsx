import React from "react";
import Footer from "../../layout/Footer/Footer";
import Navbar from "../../layout/Navbar/Navbar";
import ContactHeader from "./sections/contact-header/ContactHeader";
import AvailableDays from "./sections/available-days/AvailableDays";
import FormSection from "./sections/form-section/FormSection";

export default function Contact() {
    return (
        <>
            <Navbar />
            <ContactHeader />
            <AvailableDays />
            <FormSection />
            <Footer />
        </>
    );
}
