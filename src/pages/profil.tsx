import "../css/profil.css"
import ppImg from "../assets/charlie.png"

export function Profil() {
    return (
        <div className="profil-container">
            <div className="profile-header">

                <div className="avatar-side">
                    <div className="avatar-frame">
                        <img src={ppImg} alt="Charlie" />
                    </div>
                    <div className="xp-section">
                        <p className="level-text">Bachelor 1 &gt; B2</p>
                        <div className="xp-bar-container">
                            <div className="xp-bar-fill" style={{ width: "60%" }}></div>
                        </div>
                    </div>
                </div>

                <div className="stats-side">
                    <div className="stat-line">
                        <span className="label cyan">PLAYER:</span>
                        <span className="value">CHARLIE ROUSSEY</span>
                    </div>
                    <div className="stat-line">
                        <span className="label cyan">ROLE:</span>
                        <span className="value">DEVELOPPEUR FULL STACK</span>
                    </div>
                    <div className="stat-line">
                        <span className="label cyan">SPAWN:</span>
                        <span className="value">DIJON</span>
                    </div>
                    <div className="stat-line">
                        <span className="label cyan">MAIL:</span>
                        <span className="value">CROUSSEY2016@GMAIL.COM</span>
                    </div>

                    <div className="social-links-container">
                        <a href="https://www.linkedin.com/in/charlie-roussey-6219aa335/" target="_blank" rel="noopener" className="btn-social magenta">LinkedIn</a>
                        <a href="https://github.com/croussey10" target="_blank" rel="noopener" className="btn-social cyan">GitHub</a>
                    </div>
                </div>
            </div>

            <div className="bio-sections">
                <div className="glass-box cyan-border">
                    <h4>La passion :</h4>
                    <p>Ce qui me fascine dans le developpement, c'est la liberté de créer sans limite. Partir d'une page blanche pour bâtir un univers virtuel, en alliant innovation et imagination.</p>
                </div>
                <div className="glass-box magenta-border">
                    <h4>Spécialisation :</h4>
                    <p>Je suis naturellement plus attiré par le développement Back-end. Ce qui me passionne, c’est de concevoir toute la logique invisible d'un site. Pour beaucoup, un bouton sur une page est un geste simple, mais ce qui m'intéresse vraiment, c'est de construire la mécanique complexe qui se déclenche en coulisses pour que ce 'bouton magique' fonctionne parfaitement.</p>
                </div>
                <div className="glass-box cyan-border">
                    <h4>Storytelling :</h4>
                    <p>J'ai grandi avec une Gameboy à la main, en commençant par Super Mario Land. Avec le temps, la simple expérience de jeu ne me suffisait plus : je voulais comprendre comment tout cela était construit. C’est en découvrant mes premiers tutoriels de programmation sur YouTube que j'ai eu le déclic. Ce qui n'était qu'une curiosité de joueur est rapidement devenu une véritable envie de créer mes propres jeux et sites web.</p>
                </div>
            </div>
        </div>
    );
}