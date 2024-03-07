import { useState } from "react";
import "./Rain.css";

const Rain = () => {
    let [opacity, setOpacity] = useState(true);
    let hideState = opacity ? "hideRain" : "";

    setTimeout((e) => {
        setOpacity((opacity = !opacity));
    }, 15000);

    return (
        <div className="rainBackground">
            <div className={`rain ${hideState}`}></div>
        </div>
    );
};

export default Rain;
