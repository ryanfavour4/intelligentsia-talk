import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
// import provokingThoughts from "../../../../assets/icons/provoking-deeper-thought.png";

type props = {
    handlePlayPause: () => void;
};

export default function Hero({ handlePlayPause }: props) {
    return (
        <div className="bg-hero-vid min-h-[600px] h-full">
            <video
                className="absolute inset-0 object-cover max-h-[800px] min-h-[600px] h-full w-full z-[-2]"
                autoPlay
                muted
                loop
            >
                <source src="\videos\hero-video-intro.mp4" type="video/mp4" />
            </video>
            <div className="w-full h-full absolute z-[-1] bg-black/70"></div>
            <div className="wrapper flex !h-[500px] items-center justify-center text-center flex-col gap-4">
                {/* <img
                    src={provokingThoughts}
                    alt=""
                    onClick={handlePlayPause}
                    title="play theme song"
                    className="w-72 md:w-96 cursor-pointer hover:[-webkit-filter:drop-shadow(0px_0px_15px_var(--secondary-color))]"
                /> */}

                <div className="font-poppins font-bold text-3xl text-center mb-3 flex flex-wrap items-center justify-center cursor-pointer hover:[-webkit-filter:drop-shadow(0px_0px_15px_var(--secondary-color))]">
                    <span className="border-b-4 border-white text-secondary pl-1 user-select-secondary">
                        COMMUNITY
                    </span>
                    <span className="border-b-4 border-secondary text-white pl-1 user-select-primary">
                        OF THINKERS
                    </span>
                </div>

                <p className="text-xl md:text-2xl">
                    Provoking Deeper Thoughts. <br />
                    Elevating Human Connection.
                </p>

                {/* <small>Provoking Deeper Thoughts!</small> */}

                <div className="mt-8 flex flex-wrap gap-6 max-w-2xl justify-center items-center">
                    <Link
                        to="/"
                        className="inline-flex text-secondary font-semibold bg-transparent border-secondary border-[3px] py-2 px-6 focus:outline-none hover:bg-secondary/20 rounded-3xl"
                    >
                        Videos
                    </Link>
                    <Link
                        to="/about"
                        className="inline-flex text-secondary font-semibold bg-transparent border-secondary border-[3px] py-2 px-6 focus:outline-none hover:bg-secondary/20 rounded-3xl"
                    >
                        About
                    </Link>
                    <Link
                        to="/events"
                        className="inline-flex text-secondary font-semibold bg-transparent border-secondary border-[3px] py-2 px-6 focus:outline-none hover:bg-secondary/20 rounded-3xl"
                    >
                        Events
                    </Link>
                    <Link
                        to="/intelligentsia-wall"
                        className="inline-flex text-secondary font-semibold bg-transparent border-secondary border-[3px] py-2 px-6 focus:outline-none hover:bg-secondary/20 rounded-3xl"
                    >
                        Intelligentsia Wall
                    </Link>
                </div>
            </div>
        </div>
    );
}
