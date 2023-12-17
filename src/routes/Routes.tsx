import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "../components/Loading/Loading";

// !! ========= PAGES ======= !! //
const Home = lazy(() => import("../pages/home/Home"));
const About = lazy(() => import("../pages/about/About"));

const Routers = () => {
    return (
        <>
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </Suspense>
        </>
    );
};

export default Routers;

