import "./Footer.css";
import logo from "../../assets/icons/logo.png";

const Footer = () => {
    return (
        <footer>
            <div className="centerBox">
                <div className="footerBanner">
                    <img src={logo} className="logo" alt="" />
                </div>
                {/* <div className="socialMedias">
                    <a href="/">
                        <img
                            src="/images/facebookicon.svg"
                            alt=""
                            className="fb"
                        />
                    </a>
                    <a href="/">
                        <img
                            src="/images/twittericon.svg"
                            alt=""
                            className="tw"
                        />
                    </a>
                    <a href="/">
                        <img
                            src="/images/youtubeicon.svg"
                            alt=""
                            className="yt"
                        />
                    </a>
                    <a href=" ">
                        <img
                            src="/images/instagramicon.svg"
                            alt=""
                            className="ig"
                        />
                    </a>
                </div> */}
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
