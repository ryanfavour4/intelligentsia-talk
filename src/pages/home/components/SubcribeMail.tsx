import "./SubscribeMail.css";

const SubscribeMail = () => {
    return (
        <div className="mail_subscribe_div">
            <div className="subscribe_mail_box">
                <div className="mail_subscribe_heading">
                    <h2 className="text-2xl font-header">
                        Subscribe To Our Newsletter
                    </h2>
                    <p>
                        Join our newsletter to get receive latest news and
                        notifications on our next talk event
                    </p>
                </div>
                <form action="">
                    <input
                        type="email"
                        placeholder="Email"
                        className="subscribeInput"
                    />
                    <input
                        type="submit"
                        className="subscribeButton"
                        value="SUBSCRIBE"
                    />
                    <small className="noSpams">
                        We ensure that there are no spam on your inbox.
                    </small>
                </form>
            </div>
        </div>
    );
};

export default SubscribeMail;
