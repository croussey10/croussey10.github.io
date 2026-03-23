import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Home} from "./pages/home.tsx";
import {Profil} from "./pages/profil.tsx";
import {Skills} from "./pages/skills.tsx";
import {Projects} from "./pages/projects.tsx";
import {Navbar} from "./components/navbar.tsx";
import StarBackground from "./components/StarBackground.tsx";
import {ProjectDetail} from "./pages/projectDetail.tsx";

function App() {

  return (
      <div className="App">
          <StarBackground />
          <BrowserRouter>
              <Navbar/>
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/profil" element={<Profil/>}/>
                  <Route path="/projects" element={<Projects/>}/>
                  <Route path="/skills" element={<Skills/>}/>
                  <Route path="/projects/:slug" element={<ProjectDetail />} />
              </Routes>
          </BrowserRouter>
      </div>
  )
}

export default App
