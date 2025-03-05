import React from "react";
import { Link } from "react-router-dom";

export default function CeoIntro() {
    return (
        <section className="pt-4 pb-6">
            <div className="wrapper">
                <h3 className="title-animated text-2xl font-header">
                    Intelligentsia Talk
                </h3>

                <div className="md:grid grid-cols-2 md:gap-2 flex flex-col gap-5">
                    <div className="max-w-xl w-full border-double border-4 border-secondary rounded-lg">
                        <video
                            className="rounded-lg"
                            width={"100%"}
                            controls
                            loop
                        >
                            <source
                                src="/videos/intelligentsia-world-video.mp4"
                                type="video/mp4"
                            />
                        </video>
                    </div>
                    <article className="flex flex-col justify-between md:py-6">
                        <p>
                            At Intelligentsia Talk, our mission is to transform
                            the stage into a powerful conduit for shared human
                            experiences. We empower individuals to transcend
                            mere speakership, becoming storytellers who weave
                            authenticity into every word. Our commitment is to
                            curate a platform where the spoken word is a
                            catalyst for understanding, connection, and
                            collective growth.
                        </p>

                        <Link
                            className="md:mt-0 mt-10 hover:text-secondary group w-fit flex items-center hover:font-bold"
                            to={"/about"}
                        >
                            Read More
                            <div className="group-hover:animate-ping ml-4 text-lg">
                                →
                            </div>
                        </Link>
                    </article>
                </div>
            </div>
        </section>
    );
}
