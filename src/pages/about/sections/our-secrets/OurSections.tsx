import React from "react";

export default function OurSections() {
    return (
        <div className="wrapper py-6">
            <div className="text-center flex items-center justify-center mb-6">
                <h3 className="text-center title-animated font-header font-semibold md:text-2xl text-xl !my-0">
                    Our Secret{" "}
                </h3>
            </div>
            <p>
                We recognize that human challenges and life patterns often
                repeat, leading people to forget amidst unpredictable factors.
                Our team follows a simple yet powerful rule: "written-reminders"
                or key signs that each member revisits periodically. These
                reminders realign our values with the foundation of why Times
                and Intelligentsia exist. We call this process "Back to the
                Centre." The diagram below illustrates common signs:
            </p>

            <ol className="my-6">
                <li>- Doubting your purpose?</li>
                <li>- Bored of doing the same thing?</li>
                <li>- Distraction from the world around you?</li>
                <li>- Emptiness from lacking diverse education?</li>
                <li>- Feeling tired without a clear reason?</li>
                <li>- Thoughts keeping you busier than your work?</li>
            </ol>

            <p>
                Recognizing these signs prompts a return to the core, ensuring
                that our collective purpose and values remain at the forefront
                of our endeavors.
            </p>
        </div>
    );
}
