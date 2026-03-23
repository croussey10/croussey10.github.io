import { useParams, Link } from "react-router-dom";
import { projectsData } from "../data/projectsData.ts";
import "../css/projectDetail.css";

export function ProjectDetail() {
    const { slug } = useParams();
    const project = projectsData.find((p) => p.slug === slug);

    if (!project) return <div className="error">Projet non trouvé</div>;

    return (
        <div className="project-detail-page">
            <div className="main-board green-border">
                <Link to="/projects" className="back-arrow">{"<"}</Link>

                <h1 className="project-title">{project.title}</h1>

                <div className="detail-content">
                    <section className="detail-section">
                        <p className="cyan-label">REPOSITORY :</p>
                        <a href={project.repo} target="_blank" rel="noreferrer" className="repo-link">
                            {project.repo}
                        </a>
                    </section>

                    <section className="detail-section">
                        <p className="cyan-label">OBJECTIF :</p>
                        <p className="vt-text">{project.objectif}</p>
                    </section>

                    <section className="detail-section">
                        <p className="cyan-label">CONTRAINTES :</p>
                        <ul className="vt-text">
                            {project.contraintes.map((c, i) => (
                                <li key={i} className="constraint-item">{c}</li>
                            ))}
                        </ul>
                    </section>

                    <section className="detail-section">
                        <p className="cyan-label">CE QUE J'AI APPRIS :</p>
                        <p className="vt-text">{project.appris}</p>
                    </section>

                    <div className="galerie-container blue-border">
                        <h3 className="yellow-label">GALERIE :</h3>
                        <div className="galerie-grid">
                            {project.galerieImgs.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`Capture ${index + 1}`}
                                    className="galerie-item"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}