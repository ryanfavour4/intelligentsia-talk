import React from "react";
import ceoImage from "../../../../assets/images/joseph-ezeakunne.jpg";

export default function Ceo() {
    return (
        <div>
            <div className="wrapper">
                <article className="md:text-justify my-8 relative">
                    <h3 className="text-center title-animated font-header font-semibold md:text-2xl text-xl !mt-0">
                        ABOUT THE FOUNDER. Mr Jospeh Ezeakunne
                    </h3>
                    <span className="md:w-fit md:m-auto md:float-right md:p-6 mb-6">
                        <img
                            src={ceoImage}
                            className="w-full object-top md:w-96 max-h-56 object-cover border-4 border-secondary rounded-xl m-auto"
                            alt=""
                        />
                    </span>
                    <p>
                        In the intricate tapestry of Mr. Joseph Ezeakunne's
                        life, his profound philosophy finds roots in moments of
                        quiet reflection, a sanctuary amidst the clamor of the
                        world. From his formative years, Joseph, ever the
                        introspective soul, carved out pockets of stillness
                        within himself, seeking understanding amid life's chaos.
                        The echoes of loss became a profound refrain—his
                        sister's battle with breast cancer in 2006 resurfaces in
                        quiet moments of recreation.
                    </p>
                    <br />
                    <p>
                        A decade later, another chapter unfolds with the loss of
                        his father, just 12 days after their last meeting, a
                        poignant reminder that life's noises do not exempt even
                        the most reflective spirits. Joseph's mission
                        crystallized: to provide spaces where individuals can
                        revisit their inner sanctums, fostering a reconnection
                        with their inner truths. It is within these quiet realms
                        that individual creativity flourishes, where life
                        lessons gain power not in solitude but as tools shared
                        among mankind.
                    </p>
                    <br />
                    <p>
                        Mr. Joseph Ezeakunne, holding a BSc in Business from the
                        esteemed University of Bedfordshire in England,
                        understands the transformative potential of education
                        and introspection. In Joseph's vision, purpose
                        transcends boundaries. A purposeful life is not a
                        solitary pursuit but a collective endeavor, where the
                        wisdom gained in silence becomes a beacon shared with
                        fellow travelers on this human journey. The innermost
                        place, the nexus of one's deepest self, becomes the
                        crucible shaping the outer world. Hence, Intelligentsia
                        Talk emerges—a platform where the wisdom gained through
                        personal introspection is not just celebrated but
                        shared, fostering a profound connection with the human
                        spirit and inspiring creativity that transcends
                        individual boundaries. In the quiet spaces, in shared
                        lessons, and in the purpose that binds us all,
                        Intelligentsia Talk comes to life, a testament to the
                        transformative power of the innermost place.
                    </p>
                </article>
            </div>
        </div>
    );
}
