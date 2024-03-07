import logo from "../../../../assets/icons/logo.png";
import "./InnovativeWord.css";

const InnovativeWord = () => {
    return (
        <div className="pb-8 md:pb-10 lg:pb-14">
            <div className="section-bgblue innovative-bg">
                <div className="intelligentsiaBrand-left">
                    <img src={logo} alt="intelligentsia talk" />
                </div>
                <div className="container">
                    <div className="cutrule"></div>

                    <div className="gold-blade"></div>
                    <div className="blue-blade"></div>

                    <div className="inner-word-writeup">
                        <div className="heading-innovative-words mb-1">
                            <h1>
                                FEAR KILLS MORE DREAMS <br />
                                THAN FAILURE EVER WILL.
                            </h1>
                        </div>
                        <div className="sub-heading-innovative-words">
                            Inaction breeds doubt and fear. Action breeds
                            confidence and courage. If you want to conquer fear,
                            do not sit home and think about it. Go out and get
                            busy.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InnovativeWord;
