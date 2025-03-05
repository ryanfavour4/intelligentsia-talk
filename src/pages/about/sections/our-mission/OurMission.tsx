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
                        At Intelligentsia Talk, our mission is to transform the
                        stage into a powerful conduit for shared human
                        experiences. We empower individuals to transcend mere
                        speakership, becoming storytellers who weave
                        authenticity into every word. Our commitment is to
                        curate a platform where the spoken word is a catalyst
                        for understanding, connection, and collective growth.
                        Join us in illuminating the profound beauty of the human
                        experience—one speech at a time. Welcome to a mission
                        that amplifies the strength of words to inspire and
                        unite.
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
