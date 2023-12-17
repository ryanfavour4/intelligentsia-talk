import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import SubscribeMail from "../home/components/SubcribeMail";

export default function About() {
    return (
        <>
            <Navbar />
            <div className="">
                <div className="wrapper">
                    <div className="flex items-center justify-center flex-col font-header md:text-2xl text-xl font-semibold mb-10 w-fit m-auto mt-6">
                        <h3>
                            Intelligentsia Talk is a stage speech and discussion
                            about our world.
                        </h3>
                        <div className="bg-secondary h-1 w-full"></div>
                    </div>
                    <div className="">
                        <p>
                            it's a space where powerful messages resonate
                            through our personal journeys, family ties, societal
                            dynamics, and the broader global story. It invites
                            everyone on a deep exploration, a quest to discover
                            our true selves.At its core, Intelligentsia Talk
                            values the wisdom found in everyday life—the kind
                            that emerges from the experiences of regular people
                            navigating the complexities of society. It's a
                            tribute to those who, despite challenges, shape
                            their own destinies and embody authenticity. This
                            symphony blends intelligence with academic
                            knowledge, weaving together our innate brilliance
                            with the insights gained from formal education. The
                            aim is to spark fresh ways of thinking, encouraging
                            everyone to contribute to a dialogue that springs
                            from the grassroots. Intelligentsia Talk takes a
                            bottom-up approach, aiming to build empathy by
                            giving a platform to the voices of everyday
                            individuals facing the heart of societal issues.
                            Through these shared stories, it seeks to create
                            genuine connections and a shared understanding.
                        </p>
                        <br />
                        <p>
                            Yet, it goes further, prompting individuals to
                            reflect on their inner selves. It suggests that the
                            noise of the external world might drown out our true
                            selves, urging participants to rediscover their
                            inner truths. A distinctive feature is its belief in
                            life signs and subtle cues—a recognition of the
                            various forms of communication beyond spoken words.
                            This openness invites diverse interpretations and
                            enriches the conversation.
                        </p>
                        <br />
                        <p>
                            In essence, Intelligentsia Talk is not just a
                            platform; it's a philosophical space where
                            intelligence, everyday perspectives, and the quest
                            for authenticity meet. It welcomes everyone to join
                            a dialogue rooted in our shared experiences,
                            fostering connections and a deeper understanding of
                            life.
                        </p>
                    </div>
                </div>
                <br />
                <br />
                <div className="bg-primary pb-4">
                    <div className="wrapper">
                        <div className="flex items-center justify-center flex-col font-header md:text-2xl text-xl font-semibold mb-6 w-fit m-auto">
                            <h3>Our Vision</h3>
                            <div className="bg-secondary h-1 w-full"></div>
                        </div>
                        <p>
                            Envision a world where the stage transcends its
                            physical dimensions—a realm where every speech
                            becomes a profound dialogue between souls,
                            resonating with the shared experiences of humanity.
                            In this transformative space, individuals are not
                            just speakers; they are storytellers of the human
                            condition. Our vision is a stage that echoes with
                            authenticity, where each word spoken is a stepping
                            stone toward deeper connections, understanding, and
                            collective growth. Here, the power of speech is
                            harnessed not for personal gain but as a vessel for
                            shared wisdom, forging bonds that unite us in the
                            journey of being truly human. Welcome to a stage
                            where the spotlight doesn't just illuminate
                            speakers; it illuminates the very essence of our
                            shared existence.
                        </p>
                    </div>
                    <br />
                    <div className="wrapper">
                        <div className="flex items-center justify-center flex-col font-header md:text-2xl text-xl font-semibold mb-6 w-fit m-auto">
                            <h3>Our Mission</h3>
                            <div className="bg-secondary h-1 w-full"></div>
                        </div>
                        <p>
                            At Intelligentsia Talk, our mission is to transform
                            the stage into a powerful conduit for shared human
                            experiences. We empower individuals to transcend
                            mere speakership, becoming storytellers who weave
                            authenticity into every word. Our commitment is to
                            curate a platform where the spoken word is a
                            catalyst for understanding, connection, and
                            collective growth. Join us in illuminating the
                            profound beauty of the human experience—one speech
                            at a time. Welcome to a mission that amplifies the
                            strength of words to inspire and unite.
                        </p>
                    </div>
                    <br />
                    <div className="wrapper">
                        <div className="flex items-center justify-center flex-col font-header md:text-2xl text-xl font-semibold mb-6 w-fit m-auto">
                            <h3>Our Secret</h3>
                            <div className="bg-secondary h-1 w-full"></div>
                        </div>
                        <p>
                            We recognize that human challenges and life patterns
                            often repeat, leading people to forget amidst
                            unpredictable factors. Our team follows a simple yet
                            powerful rule: "written-reminders" or key signs that
                            each member revisits periodically. These reminders
                            realign our values with the foundation of why Times
                            and Intelligentsia exist. We call this process "Back
                            to the Centre." The diagram below illustrates common
                            signs:
                        </p>

                        <ol className="my-6">
                            <li>- Doubting your purpose?</li>
                            <li>- Bored of doing the same thing?</li>
                            <li> - Distraction from the world around you?</li>
                            <li>- Emptiness from lacking diverse education?</li>
                            <li>- Feeling tired without a clear reason?</li>
                            <li>
                                - Thoughts keeping you busier than your work?
                            </li>
                        </ol>

                        <p>
                            Recognizing these signs prompts a return to the
                            core, ensuring that our collective purpose and
                            values remain at the forefront of our endeavors.
                        </p>
                    </div>
                    <br />
                </div>
            </div>

            <SubscribeMail />
            <Footer />
        </>
    );
}
