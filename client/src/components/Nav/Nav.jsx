import { Link } from "react-router-dom";
import "./Nav.css";


function Nav() {
  return (
    <>
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to="/home" className="navbar-link">
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/formvideogame" className="navbar-link">
              Create Videogame
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/about" className="navbar-link">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
