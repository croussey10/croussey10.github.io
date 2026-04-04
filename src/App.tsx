import "./App.css";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import ReactGA from "react-ga4";
import { Home } from "./pages/Home.tsx";
import { Profile } from "./pages/Profile.tsx";
import { Skills } from "./pages/Skills.tsx";
import { Projects } from "./pages/Projects.tsx";
import { Navbar } from "./components/Navbar.tsx";
import StarBackground from "./components/StarBackground.tsx";
import { ProjectDetail } from "./pages/ProjectDetail.tsx";
import ScrollTop from "./components/ScrollTop.tsx";

ReactGA.initialize("G-3HG1ENBRLP");

function AnalyticsTracker() {
    const location = useLocation();

    useEffect(() => {
        ReactGA.send({
            hitType: "pageview",
            page: location.pathname + location.hash
        });
    }, [location]);

    return null;
}

function App() {
    return (
        <div className="App">
            <StarBackground />
            <HashRouter>
                <AnalyticsTracker />
                <ScrollTop />
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/projects/:slug" element={<ProjectDetail />} />
                </Routes>
            </HashRouter>
        </div>
    );
}

export default App;