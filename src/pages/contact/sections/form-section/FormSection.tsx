import React from "react";
import "./FormSection.css";
import Input from "../../../../components/inputs/Input";
import igIcon from "../../../../assets/svg/instagram-primary-outline.svg";
import fbIcon from "../../../../assets/svg/facebook-primary-outline.svg";
import twIcon from "../../../../assets/svg/twitter-primary-outline.svg";
import ytIcon from "../../../../assets/svg/youtube-primary-outline.svg";
import useFormSection from "./FormSection.controller";

export default function FormSection() {
    const { formRef, handleSubmitContactForm } = useFormSection();

    return (
        <div className="py-6 bg-intelligentsia-logo">
            <div className="wrapper md:grid grid-cols-2 flex flex-col gap-4 bg-primary/10 backdrop-blur-lg p-4 rounded shadow-inner shadow-secondary/50">
                <div className="">
                    <h3 className="font-header font-bold md:text-2xl text-xl mb-2 text-secondary">
                        Let's get in touch
                    </h3>
                    <p className="mb-8">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Saepe dolorum adipisci recusandae praesentium dicta!
                    </p>

                    <div className="flex flex-col gap-3 text-secondary mb-4">
                        <p className="font-semibold">
                            HQ:{" "}
                            <span className="text-white font-normal">
                                6-14 Underwood St, London N1 7JQ, United Kingdom
                            </span>
                        </p>
                        <p className="font-semibold">
                            Phone:{" "}
                            <a
                                className="text-white font-normal"
                                href="tel:++44 7927 210413"
                            >
                                +44 7927 210413
                            </a>
                        </p>
                        <p className="font-semibold">
                            Mail:{" "}
                            <a
                                className="text-white font-normal"
                                href="mailto:admin@intelligentsiatalk.com"
                            >
                                admin@intelligentsiatalk.com
                            </a>
                        </p>
                    </div>

                    <div className="">
                        <p className="font-header font-semibold md:text-2xl text-xl mb-4">
                            Connect with us :
                        </p>
                        <div className="flex items-center gap-4">
                            <a href="https://www.instagram.com/intelligentsiatalk">
                                <img
                                    className="bg-secondary rounded-md p-1 w-8 h-8 md:w-12 md:h-12 md:p-2"
                                    src={igIcon}
                                    alt="ig"
                                />
                            </a>
                            <a href="http://">
                                <img
                                    className="bg-secondary rounded-md p-1 w-8 h-8 md:w-12 md:h-12 md:p-2"
                                    src={ytIcon}
                                    alt="ig"
                                />
                            </a>
                            <a href="http://">
                                <img
                                    className="bg-secondary rounded-md p-1 w-8 h-8 md:w-12 md:h-12 md:p-2"
                                    src={fbIcon}
                                    alt="ig"
                                />
                            </a>
                            <a href="http://">
                                <img
                                    className="bg-secondary rounded-md p-1 w-8 h-8 md:w-12 md:h-12 md:p-2"
                                    src={twIcon}
                                    alt="ig"
                                />
                            </a>
                        </div>
                    </div>
                </div>

                <hr className="border-secondary mb-4 md:hidden" />

                <div className="">
                    <form
                        ref={formRef}
                        onSubmit={(e: any) => {
                            e.preventDefault();
                            handleSubmitContactForm();
                        }}
                        className="md:max-w-md md:m-auto"
                    >
                        <h3 className="font-header font-bold md:text-2xl text-xl mb-2 text-secondary">
                            Contact Us
                        </h3>
                        <p className="mb-6">
                            If you would like us to call you regarding any of
                            our services, please fill in your details below.
                        </p>

                        <div className="flex flex-col gap-4">
                            <Input
                                name="Name"
                                type="text"
                                label="Full Name"
                                placeholder="Please Enter Your Name..."
                            />

                            <Input
                                name="Email"
                                type="email"
                                label="Email"
                                placeholder="Please Enter Your Email..."
                            />

                            <Input
                                name="Phone"
                                type="tel"
                                label="Phone"
                                placeholder="Please Enter Your Phone Number..."
                            />

                            <Input
                                name="Subject"
                                type="text"
                                label="Subject"
                                placeholder="Write A Subject..."
                            />

                            <div className="flex flex-col relative">
                                <label
                                    className="font-medium text-base"
                                    htmlFor="Message"
                                >
                                    Message
                                </label>
                                <textarea
                                    className="resize-none border-2 border-secondary rounded-md bg-transparent caret-secondary text-light py-2 px-3"
                                    name="Message"
                                    id="Message"
                                    placeholder="Message..."
                                />
                            </div>
                        </div>
                        <button className="mt-8 w-full text-primary font-semibold bg-secondary border-secondary border py-2 px-6 focus:outline-none hover:bg-secondary/90 rounded-lg">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
