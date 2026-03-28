import { Link } from "react-router-dom";
import { projectsData } from "../data/projectsData";
import "../css/projects.css";

export function Projects() {
    return (
        <div className="projects-page">
            <div className="main-board">
                <h1 className="board-title">SELECTIONNER UN PROJET</h1>

                <div className="projects-grid">
                    {projectsData.map((project) => (
                        <div className="project-card" key={project.id}>
                            {/* On transforme la div en Link pour rendre toute la zone cliquable */}
                            <Link to={`/projects/${project.slug}`} className="project-content blue-border">
                                <h3>{project.title}</h3>
                                <div className="img-container">
                                    <img src={project.thumbnail} alt={project.title} />
                                </div>
                                <div className="div-language-icons">
                                    {project.techIcons.map((icon, index) => (
                                        <img key={index} src={icon} alt="tech icon" />
                                    ))}
                                </div>
                            </Link>
                            {/* Le bouton VIEW PROJECT a été supprimé ici */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}