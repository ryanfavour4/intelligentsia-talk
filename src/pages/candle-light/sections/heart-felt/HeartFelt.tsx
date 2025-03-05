import React from "react";
import logoBannerImage from "../../../../assets/images/intelligentsia-talk-banner.jpg";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

export default function HeartFelt() {
    return (
        <div className="relative">
            <div className="absolute -z-10 h-full inset-0 opacity-10 mix-blend-screen">
                <Marquee className="h-full overflow-hidden">
                    <img
                        className="md:object-contain object-cover md:max-h-[1000px] h-fit object-top"
                        src={logoBannerImage}
                        alt="Legend"
                    />
                    <img
                        className="md:object-contain object-cover md:max-h-[1000px] h-fit object-top"
                        src={logoBannerImage}
                        alt="Legend"
                    />
                    <img
                        className="md:object-contain object-cover md:max-h-[1000px] h-fit object-top"
                        src={logoBannerImage}
                        alt="Legend"
                    />
                    <img
                        className="md:object-contain object-cover md:max-h-[1000px] h-fit object-top"
                        src={logoBannerImage}
                        alt="Legend"
                    />
                    <img
                        className="md:object-contain object-cover md:max-h-[1000px] h-fit object-top"
                        src={logoBannerImage}
                        alt="Legend"
                    />
                </Marquee>
            </div>

            <div className="border-b-[5px] border-secondary absolute top-3 w-full"></div>
            <div className="wrapper py-6">
                <div className="text-center flex-col flex items-center justify-center mt-4 mb-8">
                    <h3 className="text-center title-animated font-header font-semibold md:text-2xl text-xl mt-0">
                        Have you lost someone before?
                    </h3>
                    <h3 className="text-center  font-header font-semibold md:text-2xl text-xl !mt-0">
                        This is for your heart to read.
                    </h3>
                </div>

                <p>
                    Loss has a way of etching itself into our souls, leaving
                    behind echoes of voices we long to hear again, shadows of
                    presence we can no longer touch. This page is for them—the
                    ones taken too soon, whether by violence, the grip of
                    kidnappers, or the silent hand of fate.
                </p>
                <br />
                <p>
                    Here, each flickering candle is more than wax and wick. It
                    is a story, a memory, a life that mattered. In its quiet
                    glow, we honor those who never had the chance to finish
                    their journey, whose dreams were interrupted, whose names
                    may fade from conversations but never from the hearts that
                    loved them.
                </p>
                <br />
                <p>
                    This is not just a memorial; it is a vow. A vow that their
                    light will never be fully extinguished. That even in the
                    stillness, they are seen. That even in the pain, they are
                    remembered.
                </p>
                <br />
                <p>
                    The Candle Wall at Intelligentsia Talk is more than a
                    tribute—it is a mirror, reflecting the weight of societal
                    pressures, the unspoken struggles, and the lives lost too
                    soon. But it is also a call to action, a reminder that we
                    must create a world where stories don’t end before their
                    time, where dreams are not buried too early, where justice
                    and humanity prevail.
                </p>
                <br />
                <p>
                    As you navigate this page, let your heart rest here for a
                    moment. Light a candle, not just in memory, but as a
                    promise—that the ones we’ve lost are not forgotten. That
                    their names, their stories, their essence live on in us.
                </p>

                <div className="border-b-4 border-secondary w-full my-8"></div>

                <p>
                    <i>Because some lights should never go out.</i>
                </p>
                <br />

                <p>
                    <i>With remembrance,</i>
                    <br />
                    <i>
                        <b>Intelligentsia Talk</b>
                    </i>
                </p>
                <br />
                <br />
                <Link
                    className="md:mt-0 mt-10 text-secondary hover:text-secondary group w-fit flex items-center hover:font-bold"
                    to={"/contact"}
                >
                    Reach Out
                    <div className="group-hover:animate-ping ml-4 text-lg">
                        →
                    </div>
                </Link>
            </div>
        </div>
    );
}
