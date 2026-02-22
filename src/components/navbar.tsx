import {NavLink} from "react-router-dom";
import "./navbar.css"

export function Navbar () {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">ACCUEIL</NavLink>
                </li>
                <li>
                    <NavLink to="/profil">PROFIL</NavLink>
                </li>
                <li>
                    <NavLink to="/projects">PROJECTS</NavLink>
                </li>
                <li>
                    <NavLink to="/skills">SKILLS</NavLink>
                </li>
            </ul>
        </nav>
    )
}