import {Link} from "react-router-dom";
import "../components/home.css"
import coinMario from "../assets/coin-mario.webp"

export function Home() {
    return (
        <div className="home-container">
            <div className="div-principal">
                <h2 className="cyan-neon">WEB DEVELOPER</h2>
                <h1 className="yellow-neon">PORTFOLIO</h1>
                <h3 className="name yellow-neon">
                    CHARLIE R
                    <img src={coinMario} alt="O" className="coin-icon" />
                    USSEY
                </h3>
            </div>

            <div className="div-secondary">
                <Link to="/projects" className="press-start-btn">
                    PRESS START
                </Link>
            </div>
        </div>
    );
}