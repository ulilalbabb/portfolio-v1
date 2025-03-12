import { Route, Routes, useLocation } from "react-router-dom";
import Homepage from "./pages/homepage";
import About from "./pages/about";
import { AnimatePresence } from "motion/react";

const App = () => {
    const location = useLocation();

    return (
        <AnimatePresence exitBeforeEnter>
            <Routes key={location.pathname} location={location}>
                <Route path="/" element={<Homepage />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </AnimatePresence>
    );
};

export default App