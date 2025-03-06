import React from "react";

export default function OurSpeakers() {
    return (
        <div className="wrapper py-6">
            <div className="text-center flex items-center justify-center mb-6">
                <h3 className="text-center title-animated font-header font-semibold md:text-2xl text-xl !my-0">
                    Our Speakers{" "}
                </h3>
            </div>
            <p>
                Our carefully curated lineup of speakers brings together thought
                leaders, innovators, and visionaries who are reshaping the
                landscape of personal and professional growth.{" "}
            </p>

            <ol className="my-6">
                <li>
                    <h3 className="text-secondary text-xl font-bold font-header">
                        - Evg. Tina Chukwuka
                    </h3>
                    <p className="text-sm">
                        Founder of Jesus Empowerment Ministry (J.E.M)
                    </p>
                    <br />
                </li>
            </ol>

            <p>Join us for an unforgettable experience.</p>
        </div>
    );
}
