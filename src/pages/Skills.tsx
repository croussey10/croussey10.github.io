import "../css/skills.css";

export function Skills() {
    const categories = [
        {
            title: "FRONTEND",
            color: "cyan",
            skills: ["ANGULAR 18", "REACT", "HTML / CSS"],
        },
        {
            title: "BACKEND",
            color: "magenta",
            skills: ["JAVA", "NODE.JS", "PHP", "C"],
        },
        {
            title: "DATABASE",
            color: "yellow",
            skills: ["PostgreSQL"],
        },
    ];

    return (
        <div className="skills-page">
            <div className="core-wrapper">
                <h1 className="board-titlee">FULLSTACK SKILLS</h1>
            </div>

            <div className="skills-tree">
                {categories.map((cat) => (
                    <div
                        key={cat.title}
                        className={`skill-column ${cat.color}`}
                    >
                        <div className="group-wrapper">
                            <div className="skill-group-box">
                                {cat.skills.map((skill, i) => (
                                    <div key={i} className="skill-card">
                                        <span className="skill-name">
                                            {skill}
                                        </span>
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
