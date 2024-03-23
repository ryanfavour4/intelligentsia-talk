import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Rain from "./layout/Rain/Rain";
import Routers from "./routes/Routes";
import { ToastContainer } from "react-toastify";

function App() {
    return (
        <>
            <Rain />
            <ToastContainer />
            <Router>
                <Routers />
            </Router>
        </>
    );
}

export default App;
