import { Link } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="containerLanding">
        <h1>Bienvenido a Videojuegos WALY </h1>
        <Link to="/home" className="btn">
          Ingresar
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
