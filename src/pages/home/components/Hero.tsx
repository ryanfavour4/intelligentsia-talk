import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
import provokingThoughts from "../../../assets/icons/provoking-deeper-thought.png";

type props = {
    handlePlayPause: () => void;
};

export default function Hero({ handlePlayPause }: props) {
    return (
        <div className="bg-hero-video min-h-[600px] h-full">
            <div className="wrapper flex !h-[500px] items-center justify-center text-center flex-col gap-4">
                <img
                    src={provokingThoughts}
                    alt=""
                    onClick={handlePlayPause}
                    title="play theme song"
                    className="w-72 md:w-96 cursor-pointer hover:[-webkit-filter:drop-shadow(0px_0px_15px_var(--secondary-color))]"
                />

                <p className="text-xl md:text-2xl">
                    Talks recommended just for you, <br /> delivered to your
                    inbox
                </p>

                <div className="mt-8 flex flex-wrap gap-6 max-w-2xl justify-center items-center">
                    <Link
                        to="/"
                        className="inline-flex text-secondary font-semibold bg-transparent border-secondary border-[3px] py-2 px-6 focus:outline-none hover:bg-secondary/20 rounded-3xl"
                    >
                        Videos
                    </Link>
                    <Link
                        to="/"
                        className="inline-flex text-secondary font-semibold bg-transparent border-secondary border-[3px] py-2 px-6 focus:outline-none hover:bg-secondary/20 rounded-3xl"
                    >
                        About
                    </Link>
                    <Link
                        to="/"
                        className="inline-flex text-secondary font-semibold bg-transparent border-secondary border-[3px] py-2 px-6 focus:outline-none hover:bg-secondary/20 rounded-3xl"
                    >
                        Events
                    </Link>
                    <Link
                        to="/"
                        className="inline-flex text-secondary font-semibold bg-transparent border-secondary border-[3px] py-2 px-6 focus:outline-none hover:bg-secondary/20 rounded-3xl"
                    >
                        Intelligentsia Wall
                    </Link>
                </div>
            </div>
        </div>
    );
}
