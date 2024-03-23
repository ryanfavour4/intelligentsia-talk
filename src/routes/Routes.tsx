import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "../layout/Loading/Loading";
import ScrollToTop from "../layout/ScrollToTop";
import NotFound from "../pages/404/NotFound";

// !! ========= PAGES ======= !! //
const Home = lazy(() => import("../pages/home/Home"));
const Contact = lazy(() => import("../pages/contact/Contact"));
const About = lazy(() => import("../pages/about/About"));
const Team = lazy(() => import("../pages/team/Team"));
const CandleLight = lazy(() => import("../pages/candle-light/CandleLight"));

const Routers = () => {
    return (
        <>
            <Suspense fallback={<Loading />}>
                <ScrollToTop>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/the-team" element={<Team />} />
                        <Route path="/candle-light" element={<CandleLight />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </ScrollToTop>
            </Suspense>
        </>
    );
};

export default Routers;
