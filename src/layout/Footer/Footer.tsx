import "./Footer.css";
import logo from "../../assets/icons/logo.png";
import { ReactComponent as FbIcon } from "../../assets/svg/fb.svg";
import { ReactComponent as TwIcon } from "../../assets/svg/tw.svg";
import { ReactComponent as IgIcon } from "../../assets/svg/ig.svg";
import { ReactComponent as YtIcon } from "../../assets/svg/yt.svg";

const Footer = () => {
    return (
        <footer>
            <div className="centerBox">
                <div className="footerBanner">
                    <img src={logo} className="logo" alt="" />
                </div>
                <div className="flex items-center gap-5 my-4">
                    <a href="/">
                        <FbIcon className="text-secondary w-6 h-6" />
                    </a>
                    <a href="/">
                        <TwIcon className="text-secondary w-6 h-6" />
                    </a>
                    <a href="/">
                        <YtIcon className="text-secondary w-6 h-6" />
                    </a>
                    <a href="https://www.instagram.com/intelligentsiatalk">
                        <IgIcon className="text-secondary w-6 h-6" />
                    </a>
                </div>
                <div className="poweredByBox">
                    <span className="center">Powered by</span>
                    <span className="center">
                        <a
                            href="https://www.timesandintelligentsia.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            www.timesandintelligentsia.com
                        </a>
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
