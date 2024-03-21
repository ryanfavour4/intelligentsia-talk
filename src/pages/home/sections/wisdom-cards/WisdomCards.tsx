import React from "react";
import "./WisdomCards.css";
import logo from "../../../../assets/icons/times-intelligentsia.png";
import { Link } from "react-router-dom";

export default function WisdomCards() {
    const quotes = [
        {
            quote: "The only way to do great work is to love what you do.",
            speaker: "- Steve Jobs",
        },
        {
            quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
            speaker: "- Winston Churchill",
        },
        {
            quote: "The mind is everything. What you think you become.",
            speaker: "- Buddha",
        },
        {
            quote: "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.",
            speaker: "- Martin Luther King Jr",
        },
        {
            quote: "The future belongs to those who believe in the beauty of their dreams.",
            speaker: "- Eleanor Roosevelt",
        },
    ];

    return (
        <div className="bg-primary">
            <div className="wrapper">
                <div className="flex items-center justify-center flex-col font-header md:text-2xl text-xl font-semibold mb-10 w-fit m-auto">
                    <h3 className="title-animated">Elevate Your Spirit</h3>
                    <small className="text-base font-poppins font-normal mt-2">
                        Inspiring Words to Ignite Passion and Purpose
                    </small>
                </div>

                <div className="overflow-hidden overflow-x-auto">
                    <div className="flex items-center gap-6 w-[calc(19rem*6)]">
                        {quotes.map((quote, index) => {
                            return <WisdomCard key={index} quote={quote} />;
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

type TWisdomCard = {
    quote: {
        quote: string;
        speaker: string;
    };
};

export function WisdomCard({ quote }: TWisdomCard) {
    return (
        <Link
            to={"/intelligentsia-wall"}
            className="word-wallbox overflow-hidden transition-all hover:[-webkit-filter:drop-shadow(0px_0px_5px_var(--secondary-color))] hover:scale-[1.02]"
        >
            <div className="top-marble">
                <div className="word-of-wisdom">
                    <p>"{quote.quote}"</p>
                </div>
                <br />
                <h4>
                    <small>{quote.speaker}</small>
                </h4>
            </div>
            <div className="banner-bottom">
                <img src={logo} alt="" />
            </div>
        </Link>
    );
}
