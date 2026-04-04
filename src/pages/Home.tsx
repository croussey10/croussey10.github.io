import { Link } from "react-router-dom";
import "../css/home.css";
import coinMario from "../assets/coin-mario.webp";

export function Home() {
    document.addEventListener("mouseover", (event) => {
        const target = event.target as HTMLElement;
        const coin = target.closest(".coin-icon");
        if (coin && !coin.classList.contains("is-spinning")) {
            coin.classList.add("is-spinning");
        }
    });

    document.addEventListener("animationend", (event) => {
        const target = event.target as HTMLElement;
        const coin = target.closest(".coin-icon");
        if (coin) {
            coin.classList.remove("is-spinning");
        }
    });

    return (
        <div className="home-container">
            <div className="div-principal">
                <h2 className="cyan-neon" role="heading" aria-level={1}>
                    WEB DEVELOPER
                </h2>
                <h1 className="yellow-neon" role="heading" aria-level={2}>
                    PORTFOLIO
                </h1>
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
