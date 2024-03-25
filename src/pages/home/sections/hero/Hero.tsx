/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Hero.css";
// import provokingThoughts from "../../../../assets/icons/provoking-deeper-thought.png";
import heroBanner from "../../../../assets/images/intelligentsia-talk-banner-spines.jpg";
import manOnStage from "../../../../assets/images/man-on-stage.jpg";
import { Link } from "react-router-dom";
// import { ReactComponent as FbIcon } from "../../../../assets/svg/gold-fb.svg";
// import { ReactComponent as TwIcon } from "../../../../assets/svg/gold-tw.svg";
// import { ReactComponent as IgIcon } from "../../../../assets/svg/gold-ig.svg";
// import { ReactComponent as YtIcon } from "../../../../assets/svg/gold-yt.svg";

type props = {
    handlePlayPause: () => void;
};

export default function Hero({ handlePlayPause }: props) {
    return (
        <div className="bg-hero-vid min-h-[400px] h-full">
            {/* <video
                className="absolute inset-0 object-cover max-h-[800px] min-h-[600px] h-full w-full z-[-2]"
                autoPlay
                muted
                loop
            >
                <source src="\videos\hero-video-intro.mp4" type="video/mp4" />
            </video> */}
            <img
                className="absolute inset-0 object-cover object-center max-h-[620px] min-h-[400px] h-full w-full z-[-2] md:block hidden"
                src={heroBanner}
                alt="intelligentsia talk banner spines"
            />
            <img
                className="absolute inset-0 object-cover object-center max-h-[610px] min-h-[400px] h-full w-full z-[-2] md:hidden block"
                src={manOnStage}
                alt="intelligentsia talk banner spines"
            />
            <div className="w-full h-full absolute z-[-1] bg-black/70"></div>
            <div className="wrapper flex !h-[500px] items-start justify-center flex-col gap-4">
                {/* <img
                    src={provokingThoughts}
                    alt=""
                    onClick={handlePlayPause}
                    title="play theme song"
                    className="w-72 md:w-96 cursor-pointer hover:[-webkit-filter:drop-shadow(0px_0px_15px_var(--secondary-color))]"
                /> */}

                <div className="font-poppins font-bold text-3xl text-center mt-24 mb-3 flex flex-wrap items-center justify-center cursor-pointer hover:[-webkit-filter:drop-shadow(0px_0px_15px_var(--secondary-color))]">
                    <span className="border-b-4 border-white text-secondary pl-1 user-select-secondary">
                        COMMUNITY
                    </span>
                    <span className="border-b-4 border-secondary text-white pl-1 user-select-primary">
                        OF THINKERS
                    </span>
                </div>

                <p className="text-xl md:text-2xl mb-24">
                    Provoking Deeper Thoughts. <br />
                    Elevating Human Connection.
                </p>

                {/* <div className="flex items-center gap-4">
                    <a href="/">
                        <FbIcon className="text-secondary w-10 h-10" />
                    </a>
                    <a href="/">
                        <TwIcon className="text-secondary w-10 h-10" />
                    </a>
                    <a href="/">
                        <YtIcon className="text-secondary w-10 h-10" />
                    </a>
                    <a href="https://www.instagram.com/intelligentsiatalk">
                        <IgIcon className="text-secondary w-10 h-10" />
                    </a>
                </div> */}
                <div className="border-b-4 border-secondary w-full mt-2"></div>
                <div className="flex flex-col">
                    <span className="">Powered by</span>
                    <span className="">
                        <Link to="#">Times And Intelligentsia</Link>
                    </span>
                </div>
                {/* <small>Provoking Deeper Thoughts!</small> */}

                {/* <div className="mt-8 flex flex-wrap gap-6 max-w-2xl justify-center items-center">
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
                </div> */}
            </div>
        </div>
    );
}
