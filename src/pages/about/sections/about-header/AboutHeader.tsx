import React from "react";

export default function AboutHeader() {
    return (
        <div className="h-80 relative flex items-center justify-center">
            <video
                className="absolute inset-0 object-cover h-full w-full z-[-2]"
                autoPlay
                muted
                loop
            >
                <source src="\videos\earth-rotation.mp4" type="video/mp4" />
            </video>
            <div className="w-full h-full absolute z-[-1] bg-black/0"></div>
            <h1 className="font-header text-3xl z-[1]">About Us</h1>
        </div>
    );
}
