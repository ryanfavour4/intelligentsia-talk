import React from "react";
import forestSunlight from "../../../../assets/images/forest-sunlight.jpeg";

export default function OurVision() {
    return (
        <div className="bg-primary py-8 bg-intelligentsia-brand bg-right bg-no-repeat">
            <div className="wrapper md:grid grid-cols-2 md:gap-2 flex gap-5 md:place-items-center flex-col-reverse">
                <span className="md:w-fit md:m-auto md:mt-4">
                    <img
                        src={forestSunlight}
                        className="h-72 md:h-96 w-full md:w-96 m-auto object-cover object-top border-4 border-secondary rounded-xl"
                        alt=""
                    />
                </span>

                <article>
                    <h3 className="text-center title-animated font-header font-semibold md:text-2xl text-xl !mt-0">
                        Our Vision
                    </h3>
                    <p>
                        To create a global space where voices are heard, stories
                        are honored, and minds find clarity. Intelligentsia Talk
                        is a platform to leave a message that matters and a
                        retreat for reflection—bridging wisdom, mindfulness, and
                        action to shape a more thoughtful and connected world.
                    </p>
                </article>
            </div>
        </div>
    );
}
