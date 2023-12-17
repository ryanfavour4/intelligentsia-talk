import React from "react";
import "./WisdomCards.css";
import logo from "../../../assets/icons/times-intelligentsia.png";

export default function WisdomCards() {
    return (
        <div>
            <div className="wrapper">
                <div className="flex items-center justify-center flex-col font-header md:text-2xl text-xl font-semibold mb-10 w-fit m-auto">
                    <h3>Elevate Your Spirit</h3>
                    <div className="bg-secondary h-1 w-full"></div>
                    <small className="text-base font-poppins font-normal mt-4">
                        Inspiring Words to Ignite Passion and Purpose
                    </small>
                </div>

                <div className="overflow-hidden overflow-x-auto">
                    <div className="flex items-center gap-6 w-[calc(19rem*6)]">
                        <WisdomCard />
                        <WisdomCard />
                        <WisdomCard />
                        <WisdomCard />
                        <WisdomCard />
                    </div>
                </div>
            </div>
        </div>
    );
}

export function WisdomCard() {
    return (
        <div className="word-wallbox">
            <div className="top-marble">
                <div className="word-of-wisdom">
                    <p>
                        "Our greatest weakness lies in giving up. The most
                        certain way to succeed is always to try just one more
                        time."
                    </p>
                </div>
                <br />
                <h4>
                    <small>- Thomas Edison</small>
                </h4>
            </div>
            <div className="banner-bottom">
                <img src={logo} alt="" />
            </div>
        </div>
    );
}
