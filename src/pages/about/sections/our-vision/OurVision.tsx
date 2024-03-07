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
                        Envision a world where the stage transcends its physical
                        dimensions—a realm where every speech becomes a profound
                        dialogue between souls, resonating with the shared
                        experiences of humanity. In this transformative space,
                        individuals are not just speakers; they are storytellers
                        of the human condition. Our vision is a stage that
                        echoes with authenticity, where each word spoken is a
                        stepping stone toward deeper connections, understanding,
                        and collective growth. Here, the power of speech is
                        harnessed not for personal gain but as a vessel for
                        shared wisdom, forging bonds that unite us in the
                        journey of being truly human. Welcome to a stage where
                        the spotlight doesn't just illuminate speakers; it
                        illuminates the very essence of our shared existence.
                    </p>
                </article>
            </div>
        </div>
    );
}
