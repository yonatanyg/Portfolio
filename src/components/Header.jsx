import { Link, useLocation } from "react-router-dom";
import "./Header.css";

function Header() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  console.log("Header is rendering");
  return (
    <div className="toolbar">
      <div className="toolbar-buttons">
        <Link to="/">
          <button className={isActive("/") ? "active" : ""}>Home</button>
        </Link>
        <Link to="/projects">
          <button className={isActive("/projects") ? "active" : ""}>
            Projects
          </button>
        </Link>
        <Link to="/resume">
          <button className={isActive("/resume") ? "active" : ""}>
            Resume
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
