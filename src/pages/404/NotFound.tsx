import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
    return (
        <div className="overflow-hidden">
            <div className="hit-the-floor my-14 !text-7xl">Coming Soon!</div>
            <div className="hit-the-floor mb-8 !text-5xl">404</div>

            <p className="text-gradient text-center font-bold text-xl">
                This page doesn't exist yet. Please come back later ⚜.
            </p>

            <div className="text-xl font-bold absolute bottom-[10%] w-full flex justify-center space-x-4 p-12">
                <Link to="/">Go Home ↗</Link>
            </div>
        </div>
    );
}
