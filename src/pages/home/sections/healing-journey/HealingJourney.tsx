import React from "react";
import "./HealingJourney.css";
import image from "../../../../assets/images/woman-talking-with-man-in-office.png";
import { Link } from "react-router-dom";

export default function HealingJourney() {
    return (
        <div className="pb-10">
            <div className="wrapper">
                <div className="flex items-center justify-center flex-col font-header md:text-2xl text-xl font-semibold mb-10 w-fit m-auto">
                    <h3 className="title-animated">
                        Healing Journeys Begin Here
                    </h3>
                </div>

                <div className="md:grid grid-cols-2 place-items-center">
                    <img
                        src={image}
                        className="w-full md:w-96 h-72 md:h-auto object-cover border-4 border-secondary rounded-xl m-auto mb-8"
                        alt=""
                    />

                    <div className="">
                        <p className="mb-6 first-letter:text-2xl first-letter:font-semibold first-letter:text-secondary">
                            At Intelligentsia, our dedicated professionals offer
                            compassionate and personalized therapy services. We
                            create a safe and supportive environment for your
                            journey of self-discovery, guiding you through
                            life's challenges with resilience and insight.
                            Whether you seek individual, couples, or family
                            therapy, we are committed to fostering healing,
                            growth, and a renewed sense of balance. Take the
                            first step towards a healthier, happier you with our
                            specialized therapeutic approach. Your well-being is
                            our priority.
                        </p>

                        <Link
                            to={"/contact"}
                            className="inline-flex text-primary font-semibold bg-secondary border-secondary border py-2 px-6 focus:outline-none hover:bg-secondary/90 rounded-lg"
                        >
                            Let's Talk
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
