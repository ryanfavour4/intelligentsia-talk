import React from "react";

export default function ContactHeader() {
    return (
        <div className="h-80 relative flex items-center justify-center">
            <video
                className="absolute inset-0 object-cover h-full w-full z-[-2] object-center"
                autoPlay
                muted
                loop
            >
                <source
                    src="\videos\woman-speaking-crowd.mp4"
                    type="video/mp4"
                />
            </video>
            <div className="w-full h-full absolute z-[-1] bg-black/0"></div>
            <h1 className="font-header text-3xl z-[1]">Contact Us</h1>
        </div>
    );
}
