import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import Rain from "./components/Rain/Rain";
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

