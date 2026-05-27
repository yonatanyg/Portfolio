import { Link, useLocation } from "react-router-dom";
import "./Header.css";

function Header() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <div className="toolbar">
      <div className="toolbar-logo">
        YG<span>.</span>
      </div>

      <div className="toolbar-buttons">
        <Link to="/">
          <button className={isActive("/") ? "active" : ""}>Home</button>
        </Link>
        <Link to="/projects">
          <button className={isActive("/projects") ? "active" : ""}>Projects</button>
        </Link>
        <Link to="/resume">
          <button className={isActive("/resume") ? "active" : ""}>Resume</button>
        </Link>
      </div>

      <div className="toolbar-right">
        <a
          href="https://github.com/yonatanyg"
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
          title="GitHub"
        >
          <img
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt="GitHub"
            className="github-logo"
          />
        </a>
      </div>
    </div>
  );
}

export default Header;