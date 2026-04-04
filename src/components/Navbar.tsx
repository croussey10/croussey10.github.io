import { NavLink } from "react-router-dom";
import "../css/navbar.css";

export function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">ACCUEIL</NavLink>
                </li>
                <li>
                    <NavLink to="/profile">PROFIL</NavLink>
                </li>
                <li>
                    <NavLink to="/projects">PROJECTS</NavLink>
                </li>
                <li>
                    <NavLink to="/skills">SKILLS</NavLink>
                </li>
            </ul>
        </nav>
    );
}
