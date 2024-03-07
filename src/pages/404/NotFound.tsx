import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
    return (
        <>
            <div className="hit-the-floor">404</div>

            <p className="text-gradient text-center font-bold text-xl">
                This page doesn't exist. Please try again later or go back to
                the homepage.
            </p>

            <div className="text-xl font-bold absolute bottom-0 w-full flex justify-center space-x-4 p-12">
                <Link to="/">Go Home ↗</Link>
            </div>
        </>
    );
}
