import React from "react";
import useAvailableDaysController from "./AvailableDays.controller";

export default function AvailableDays() {
    const { workingDays } = useAvailableDaysController();

    return (
        <div className="bg-primary py-6">
            <div className="wrapper md:grid md:grid-cols-2 flex flex-col-reverse gap-6 p-4 ">
                <div className="">
                    {workingDays.map((days) => (
                        <div className="grid grid-cols-3 text-xl p-2 border-dashed border-b-2 border-white last:border-0">
                            <p>{days.day}</p> <p>-</p>{" "}
                            <p className="font-semibold">
                                {days.from} - {days.to}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="pt-2">
                    <small>TIME SCHEDULE</small>
                    <h3 className="font-header text-2xl font-bold mb-4">
                        Reach Out Hours: Connecting with Us
                    </h3>
                    <p>
                        Our "Reach Out Hours" are dedicated times when we are
                        available and eager to connect with you. Whether you
                        have questions, feedback, or just want to say hello,
                        these hours are your opportunity to engage directly with
                        our team. We value your input and cherish the chance to
                        build connections. Feel free to drop by during our Reach
                        Out Hours, and let's make the most of every
                        conversation. Your insights matter, and we're here to
                        listen.
                    </p>
                </div>
            </div>
        </div>
    );
}
