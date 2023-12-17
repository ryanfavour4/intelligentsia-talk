import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as MenuIcon } from "../../assets/svg/nav-menu-icon.svg";
import logo from "../../assets/icons/logo.png";
import logoIcon from "../../assets/icons/logo-icon.png";
import "./Navbar.css";

export default function Navbar() {
    const { handleToggleNavOpen, navClassName } = useNavbar();
    return (
        <div className="bg-dark-blue-bg py-3 relative">
            <div className="wrapper flex items-center justify-between">
                <MenuIcon
                    className="w-8 cursor-pointer md:hidden"
                    onClick={handleToggleNavOpen}
                />
                {/* //?? ==== SLIDE SIDE BAR ===== ??// */}
                <div
                    className={`${navClassName} fixed bg-primary top-0 bottom-0 right-0 left-0 md:hidden`}
                >
                    <div className="w-[98%] m-auto py-3 flex items-center justify-between border-b-2 border-secondary mb-4">
                        <MenuIcon
                            className="w-8 cursor-pointer"
                            onClick={handleToggleNavOpen}
                        />
                        <div className="flex-[1] flex items-center justify-center text-center">
                            <img
                                src={logoIcon}
                                className="w-16 mr-4 md:mr-0"
                                alt="intelligentsia talk"
                            />
                        </div>
                    </div>
                    <ul className="h-full pt-10 flex flex-col gap-6">
                        <li>
                            <Link
                                className="border-b p-4 border-secondary block hover:pl-4 hover:border-l-4"
                                to="/"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="border-b p-4 border-secondary block hover:pl-4 hover:border-l-4"
                                to="/about"
                            >
                                About
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="flex-[1] md:flex-none flex items-center justify-center text-center">
                    <img
                        src={logo}
                        className="w-32 md:w-40 mr-4 md:mr-0"
                        alt="intelligentsia talk"
                    />
                </div>

                <ul className="hidden md:flex items-center gap-8">
                    <li>
                        <Link
                            className="text-secondary hover:text-white"
                            to="/"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="text-secondary hover:text-white"
                            to="/"
                        >
                            Speakers
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="text-secondary hover:text-white"
                            to="/about"
                        >
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="text-secondary hover:text-white"
                            to="/"
                        >
                            Contact Us
                        </Link>
                    </li>
                </ul>

                <div className="hidden md:flex items-center gap-4">
                    <button className="inline-flex text-primary font-semibold bg-secondary border-secondary border py-2 px-6 focus:outline-none hover:bg-secondary/90 rounded-lg">
                        Sign In
                    </button>
                    <button className="inline-flex text-secondary font-semibold bg-transparent border-secondary border py-2 px-6 focus:outline-none hover:bg-primary/10 rounded-lg">
                        Register
                    </button>
                </div>
            </div>
        </div>
    );
}

export const useNavbar = () => {
    const [navClassName, setNavClassName] = useState("-translate-x-[100%]");

    const handleToggleNavOpen = () => {
        if (navClassName === "-translate-x-[100%]") {
            setNavClassName("-translate-x-[0%]");
        } else {
            setNavClassName("-translate-x-[100%]");
        }
    };

    return { navClassName, handleToggleNavOpen };
};
