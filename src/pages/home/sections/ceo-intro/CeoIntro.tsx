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
                            At Intelligentsia Talk, every voice matters. This is
                            more than a platform—it’s a space where powerful
                            messages echo through personal journeys, family
                            ties, and the greater societal story. It’s a call to
                            explore, to reflect, and most importantly, to leave
                            your message—the kind that lingers in hearts and
                            minds long after the words are spoken. At its core,
                            Intelligentsia Talk values the wisdom found in
                            everyday life—the kind that isn’t just learned in
                            books, but shaped by real experiences, struggles,
                            and triumphs. It’s a tribute to those who have
                            carved their own paths, who have found their voices
                            despite challenges, and who dare to speak their
                            truth.
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
