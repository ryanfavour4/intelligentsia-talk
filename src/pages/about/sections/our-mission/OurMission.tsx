import React from "react";
import ceoImage from "../../../../assets/images/intelligentsia-talk-banner.jpg";

export default function OurMission() {
    return (
        <div className="bg-primary py-8 bg-intelligentsia-brand bg-left bg-no-repeat">
            <div className="wrapper md:grid grid-cols-2 md:gap-2 flex flex-col gap-5 md:place-items-center">
                <article>
                    <h3 className="text-center title-animated font-header font-semibold md:text-2xl text-xl !mt-0">
                        Our Mission
                    </h3>
                    <p>
                        Intelligentsia Talk exists to amplify voices, bridge
                        intellect with lived experience, and ignite meaningful
                        conversations that shape society. We provide a space
                        where personal stories, societal challenges, and deep
                        reflections converge—turning wisdom into action and
                        fostering a world where no story is lost, no truth is
                        buried, and no voice is unheard.
                    </p>
                </article>

                <span className="md:w-fit md:m-auto md:mt-4">
                    <img
                        src={ceoImage}
                        className="w-full object-top md:w-96 h-72 md:h-96 object-cover border-4 border-secondary rounded-xl m-auto"
                        alt=""
                    />
                </span>
            </div>
        </div>
    );
}
