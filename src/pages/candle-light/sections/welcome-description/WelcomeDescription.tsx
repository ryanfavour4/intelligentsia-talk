import React from "react";
import Marquee from "react-fast-marquee";
import femiKuti from "../../../../assets/images/femi-kuti-vertical.jpg";
import martinLutherKingJr from "../../../../assets/images/martin-luther-kingJr-vertical.jpg";
import nelsonMandela from "../../../../assets/images/nelson-madela-vertical.jpeg";
import steveJobs from "../../../../assets/images/steve-jobs-vertical.jpg";
import thomasAquinas from "../../../../assets/images/thomas-aquinas-vertical.jpeg";

export default function WelcomeDescription() {
    return (
        <div className="relative">
            <div className="absolute -z-10 h-full inset-0 opacity-10 mix-blend-screen">
                <Marquee className="h-full overflow-hidden">
                    <img
                        className="md:object-contain object-cover md:max-h-96 h-fit object-top"
                        src={femiKuti}
                        alt="Legend"
                    />
                    <img
                        className="md:object-contain object-cover md:max-h-96 h-fit object-top"
                        src={martinLutherKingJr}
                        alt="Legend"
                    />
                    <img
                        className="md:object-contain object-cover md:max-h-96 h-fit object-top"
                        src={nelsonMandela}
                        alt="Legend"
                    />
                    <img
                        className="md:object-contain object-cover md:max-h-96 h-fit object-top"
                        src={steveJobs}
                        alt="Legend"
                    />
                    <img
                        className="md:object-contain object-cover md:max-h-96 h-fit object-top"
                        src={thomasAquinas}
                        alt="Legend"
                    />
                </Marquee>
            </div>

            <div className="border-b-[5px] border-secondary absolute top-3 w-full"></div>
            <div className="wrapper py-6">
                <h3 className="text-2xl mb-6 font-header font-bold text-secondary">
                    Welcome to our Candle Page, a sanctuary of remembrance and
                    reverence.
                </h3>
                <p>
                    Here, the flickering flames encapsulate more than mere wax
                    and wick; they embody the spirits of fallen heroes and
                    overlooked souls. We dedicate this space to those whose
                    lives were extinguished too soon, whether in the clutches of
                    violence, the grip of kidnappers, or the shadows of armed
                    robbery.
                </p>
                <br />
                <p>
                    In the quiet dance of candlelight, we illuminate stories
                    left untold, lives uncelebrated. Each flame bears witness to
                    the resilience and strength that once graced this world,
                    reminding us that even in the face of tragedy, their light
                    can never be fully extinguished.
                </p>
                <br />
                <p>
                    This Candle Page is a testament to the indomitable spirit of
                    those who faced untimely demises, a collective epitaph
                    etched in the virtual realm. It transcends the boundaries of
                    time and space, allowing us to pause, reflect, and honor
                    those who journeyed beyond the veil.
                </p>
                <br />
                <p>
                    In the glow of these candles, we find solace, unity, and a
                    vow: that these departed souls shall not be forgotten. As
                    you navigate this virtual sanctuary, may the warmth of these
                    digital flames kindle a perpetual flame in your heart,
                    ensuring that the memories of our dearly departed live on,
                    cherished and revered.
                </p>
            </div>
        </div>
    );
}
