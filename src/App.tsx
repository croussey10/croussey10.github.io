import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home.tsx";
import { Profile } from "./pages/Profile.tsx";
import { Skills } from "./pages/Skills.tsx";
import { Projects } from "./pages/Projects.tsx";
import { Navbar } from "./components/Navbar.tsx";
import StarBackground from "./components/StarBackground.tsx";
import { ProjectDetail } from "./pages/ProjectDetail.tsx";
import ScrollTop from "./components/ScrollTop.tsx";

function App() {
    return (
        <div className="App">
            <StarBackground />
            <HashRouter>
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
