import React from "react";
import { Link } from "react-router-dom";

function AboutSection1() {
    return (
        <div className="wrapper pb-8">
            <div className="text-center flex items-center justify-center mt-4">
                <h3 className="text-center title-animated font-header font-semibold md:text-2xl text-xl mt-0">
                    Intelligentsia Talk: A Place to Leave Your Message
                </h3>
            </div>

            <article className="">
                <p>
                    At Intelligentsia Talk, every voice matters. This is more
                    than a platform—it’s a space where powerful messages echo
                    through personal journeys, family ties, and the greater
                    societal story. It’s a call to explore, to reflect, and most
                    importantly, to leave your message—the kind that lingers in
                    hearts and minds long after the words are spoken.
                </p>
                <br />
                <p>
                    At its core, Intelligentsia Talk values the wisdom found in
                    everyday life—the kind that isn’t just learned in books, but
                    shaped by real experiences, struggles, and triumphs. It’s a
                    tribute to those who have carved their own paths, who have
                    found their voices despite challenges, and who dare to speak
                    their truth.
                </p>
                <p>
                    Here, we bridge intelligence and lived experience, blending
                    the knowledge gained in classrooms with the brilliance that
                    comes from simply living and observing the world. It’s about
                    sparking fresh ways of thinking and starting conversations
                    that rise from the grassroots—conversations that don’t just
                    skim the surface but dive deep into the heart of societal
                    issues.
                </p>
                <br />
                <p>
                    But Intelligentsia Talk goes beyond just discussion. It
                    challenges us to turn inward, to question if the noise of
                    the world has drowned out our true selves. It reminds us
                    that messages don’t always come in words—sometimes, they’re
                    hidden in life’s subtle cues, waiting for us to notice.
                </p>
                <br />
                <p>
                    At its essence, this is a space for those who seek
                    authenticity—a meeting point of intellect, raw experience,
                    and the undeniable truth of being human. Through shared
                    stories and meaningful dialogue, we build connection,
                    empathy, and a deeper understanding of life.
                </p>
                <br />
                <p>
                    <i>
                        Leave your message. Because what you say today may light
                        the way for someone tomorrow.
                    </i>
                </p>
                <Link
                    to={"/contact"}
                    className="mt-8 w-fit text-primary font-semibold bg-secondary border-secondary border py-2 px-6 focus:outline-none hover:bg-secondary/90 rounded-lg block"
                >
                    Reach Out
                </Link>
            </article>
        </div>
    );
}

export default AboutSection1;
