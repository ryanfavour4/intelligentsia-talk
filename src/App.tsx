import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Rain from "./layout/Rain/Rain";
import Routers from "./routes/Routes";

function App() {
    return (
        <>
            <Rain />
            <Router>
                <Routers />
            </Router>
        </>
    );
}

export default App;

