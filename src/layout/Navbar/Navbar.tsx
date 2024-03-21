import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as MenuIcon } from "../../assets/svg/nav-menu-icon.svg";
import { ReactComponent as ChevronDownIcon } from "../../assets/svg/chevron-down.svg";
import logo from "../../assets/icons/logo.png";
// import logoIcon from "../../assets/icons/logo-icon.png";
import "./Navbar.css";
import useNavbar from "./Navbar.controller";

export default function Navbar() {
    const {
        isScrolled,
        navClassName,
        navigations,
        handleToggleNavOpen,
        toggleDropdown,
    } = useNavbar();

    return (
        <>
            {isScrolled && <div className={"h-28"}></div>}

            <div
                className={`bg-dark-blue-bg py-3 relative ${
                    isScrolled && "!fixed top-0 left-0 right-0 z-10"
                }`}
            >
                <div className="wrapper flex items-center justify-between">
                    {/* md:hidden */}
                    <MenuIcon
                        className="w-8 cursor-pointer "
                        onClick={handleToggleNavOpen}
                    />
                    {/* //?? ==== SLIDE SIDE BAR ===== ??// */}
                    {/* md:hidden */}
                    <div
                        className={`${navClassName} fixed bg-primary top-0 bottom-0 right-0 left-0  z-10 `}
                    >
                        <div className="w-[98%] m-auto py-2 flex items-center justify-between border-b-2 border-secondary mb-4">
                            <MenuIcon
                                className="w-8 cursor-pointer"
                                onClick={handleToggleNavOpen}
                            />
                            <div className="flex-[1] flex items-center justify-center text-center">
                                <Link onClick={handleToggleNavOpen} to={"/"}>
                                    <img
                                        src={logo}
                                        className="w-36 mr-4 md:mr-0"
                                        alt="intelligentsia talk"
                                    />
                                </Link>
                            </div>
                        </div>
                        <div className="h-5/6 pb-[5%]">
                            <ul className="pt-10 flex flex-col gap-6 h-full overflow-y-auto scroll-hidden md:max-w-7xl md:mr-auto">
                                {navigations.map((navigation, idx) =>
                                    navigation.nestedLinks?.length ? (
                                        <li key={navigation.name} className="">
                                            <Link
                                                className="border-b p-4 border-secondary hover:pl-4 hover:border-l-4 flex justify-between items-center"
                                                to={"#"}
                                                onClick={() =>
                                                    toggleDropdown(
                                                        navigation,
                                                        idx
                                                    )
                                                }
                                            >
                                                <span>{navigation.name}</span>
                                                <ChevronDownIcon className="text-secondary w-8 h-8" />
                                            </Link>
                                            <div
                                                className={`${
                                                    navigation.isOpen
                                                        ? "h-fit"
                                                        : "h-0"
                                                } overflow-hidden bg-secondary flex flex-col text-primary font-medium border-t-2 border-primary`}
                                            >
                                                {navigation.nestedLinks.map(
                                                    (val) => (
                                                        <Link
                                                            key={val.link}
                                                            className="hover:bg-white pl-6 py-3"
                                                            to={val.link}
                                                        >
                                                            {val.name}
                                                        </Link>
                                                    )
                                                )}
                                            </div>
                                        </li>
                                    ) : (
                                        <li key={navigation.link}>
                                            <Link
                                                className="border-b p-4 border-secondary block hover:pl-4 hover:border-l-4"
                                                to={navigation.link}
                                            >
                                                {navigation.name}
                                            </Link>
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>
                    </div>
                    {/* md:flex-none */}
                    <div className="flex-[1]  flex items-center justify-center text-center">
                        <Link to={"/"}>
                            <img
                                src={logo}
                                className="w-32 md:w-40 mr-4 md:mr-0"
                                alt="intelligentsia talk"
                            />
                        </Link>
                    </div>
                    {/* md:flex */}
                    <ul className="hidden  items-center gap-8">
                        {navigations.map((navigation, idx) =>
                            navigation.nestedLinks?.length ? (
                                navigation.forDesktop !== false && (
                                    <li className="group relative">
                                        <Link
                                            className="text-secondary group-hover:text-white flex items-center"
                                            to="#"
                                        >
                                            <span>{navigation.name}</span>
                                            <ChevronDownIcon className="text-secondary group-hover:text-white w-8 h-6" />
                                        </Link>
                                        <div className="group-hover:h-fit h-0 absolute z-10 overflow-hidden bg-secondary flex flex-col gap-2 text-base text-primary rounded-sm">
                                            {navigation.nestedLinks.map(
                                                (val) => (
                                                    <Link
                                                        className="hover:bg-white py-2 px-6  whitespace-nowrap"
                                                        to={val.link}
                                                    >
                                                        {val.name}
                                                    </Link>
                                                )
                                            )}
                                        </div>
                                    </li>
                                )
                            ) : (
                                <li>
                                    <Link
                                        className="text-secondary hover:text-white"
                                        to={navigation.link}
                                    >
                                        {navigation.name}
                                    </Link>
                                </li>
                            )
                        )}
                    </ul>
                    {/* md:flex */}
                    <div className="hidden  items-center gap-4">
                        <button className="inline-flex text-primary font-semibold bg-secondary border-secondary border py-2 px-6 focus:outline-none hover:bg-secondary/90 rounded-lg">
                            Sign In
                        </button>
                        <button className="inline-flex text-secondary font-semibold bg-transparent border-secondary border py-2 px-6 focus:outline-none hover:bg-primary/10 rounded-lg">
                            Register
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
