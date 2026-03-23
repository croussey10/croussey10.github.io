import { Link } from "react-router-dom";
import { projectsData } from "../data/projectsData"; // Import des données centralisées
import "../css/projects.css";

export function Projects() {
    return (
        <div className="projects-page">
            <div className="main-board">
                <h1 className="board-title">SELECTIONNER UN PROJET</h1>

                <div className="projects-grid">
                    {projectsData.map((project) => (
                        <div className="project-card" key={project.id}>

                            <div className="project-content blue-border">
                                <h3>{project.title}</h3>
                                <div className="img-container">
                                    {/* On a enlevé le width="300px" car le CSS gère tout */}
                                    <img src={project.thumbnail} alt={project.title} />
                                </div>
                                <div className="div-language-icons">
                                    {project.techIcons.map((icon, index) => (
                                        <img key={index} src={icon} alt="tech icon" />
                                    ))}
                                </div>
                            </div>

                            <Link to={`/projects/${project.slug}`} className="view-project-btn blue-border">
                                VIEW PROJECT
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}