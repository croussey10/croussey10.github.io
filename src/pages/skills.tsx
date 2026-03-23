import "../css/skills.css";

export function Skills() {
    const categories = [
        {
            title: "FRONTEND",
            theme: "cyan",
            skills: ["HTML / CSS / JS", "REACT"]
        },
        {
            title: "BACKEND",
            theme: "magenta",
            skills: ["NODE.JS", "PHP", "JAVA", "C", "PYTHON"]
        },
        {
            title: "DATABASE (BDD)",
            theme: "yellow",
            skills: ["PostgreSQL"]
        }
    ];

    return (
        <div className="skills-page">
            {/* NOYAU CENTRAL STYLE 'MAIN-BOARD' */}
            <div className="core-wrapper">
                <h1 className="board-titlee">FULLSTACK SKILLS</h1>
            </div>

            <div className="skills-tree">
                {categories.map((cat) => (
                    <div key={cat.title} className={`skill-column ${cat.theme}`}>
                        <div className="group-wrapper">
                            {/* Grand cadre thématique inspiré de 'project-content' */}
                            <div className="skill-group-box">
                                {cat.skills.map((skill, i) => (
                                    <div key={i} className="skill-card">
                                        <span className="skill-name">{skill}</span>
                                    </div>
                                ))}
                            </div>
                            <h2 className="category-title">{cat.title}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}