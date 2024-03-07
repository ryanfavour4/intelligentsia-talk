import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "../layout/Loading/Loading";
import ScrollToTop from "../layout/ScrollToTop";
import NotFound from "../pages/404/NotFound";

// !! ========= PAGES ======= !! //
const Contact = lazy(() => import("../pages/contact/Contact"));
const Home = lazy(() => import("../pages/home/Home"));
const About = lazy(() => import("../pages/about/About"));

const Routers = () => {
    return (
        <>
            <Suspense fallback={<Loading />}>
                <ScrollToTop>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </ScrollToTop>
            </Suspense>
        </>
    );
};

export default Routers;
