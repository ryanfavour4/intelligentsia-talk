import React from "react";
import "./Loading.css";
import logo from "../../assets/icons/logo.png";

export default function Loading() {
    return (
        <div className="loading-component flex items-center justify-center">
            <div className="">
                <img
                    src={logo}
                    className="animate-pulse w-52"
                    alt="intelligentsia talk"
                />
            </div>
        </div>
    );
}
