import { useEffect, useState } from "react";

export default function useNavbar() {
    const [navigations, setNavigations] = useState([
        { name: "Home", link: "/" },
        { name: "About Us", link: "/about" },
        { name: "Contact Us", link: "/contact" },
        {
            name: "Intelligentsia",
            link: "#",
            isOpen: false,
            nestedLinks: [
                { name: "Intelligentsia Wall", link: "/intelligentsia-wall" },
                { name: "Candle Light Room", link: "/candle-light" },
                { name: "Meet The Team", link: "/the-team" },
            ],
        },
        {
            name: "Videos",
            link: "#",
            isOpen: false,
            nestedLinks: [
                { name: "All Videos", link: "/all-videos" },
                { name: "Latest Videos", link: "/videos-latest" },
                { name: "Most Watched", link: "/videos-popular" },
            ],
        },
        {
            name: "Account",
            link: "#",
            forDesktop: false,
            isOpen: false,
            nestedLinks: [
                { name: "Register", link: "/register" },
                { name: "Sign In", link: "/sign-in" },
            ],
        },
    ]);

    //!!======= SCROLL PASS THE NAVBAR =========!!//
    //!!======= SCROLL PASS THE NAVBAR =========!!//
    const [isScrolled, setIsScrolled] = useState(false);
    const scrollDistance = 250;

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY >= scrollDistance);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    //!!======= OPEN AND CLOSE NAVBAR =========!!//
    //!!======= OPEN AND CLOSE NAVBAR =========!!//
    const [navClassName, setNavClassName] = useState("-translate-x-[100%]");

    const handleToggleNavOpen = () => {
        if (navClassName === "-translate-x-[100%]") {
            setNavClassName("-translate-x-[0%]");
        } else {
            setNavClassName("-translate-x-[100%]");
        }
    };

    // !! ========= TOGGLE NESTED NAV DROPDOWN PAGES !!//

    const toggleDropdown = (object: (typeof navigations)[0], idx: number) => {
        const newNavigations = [...navigations];
        newNavigations[idx].isOpen = !newNavigations[idx].isOpen;
        setNavigations(newNavigations);
    };

    return {
        navClassName,
        navigations,
        toggleDropdown,
        isScrolled,
        handleToggleNavOpen,
    };
}
