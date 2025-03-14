import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import Moon from "./icons/Moon";
import Sun from "./icons/Sun";
import Logo from "./Logo";

function Navbar({ title, darkMode, toggleDarkMode }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality
    console.log("Searching for:", searchQuery);
  };

  useEffect(() => {
    // Close mobile menu on route change
    setIsMenuOpen(false);
  }, [location]);

  return (
    <nav
      className={`navbar navbar-expand-lg ${
        darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"
      } shadow-sm`}
    >
      <div className="container-xl">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <Logo className="me-2" style={{ width: "40px", height: "40px" }} />
          <span className="fw-bold">{title}</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
        >
          <span
            className={`navbar-toggler-icon ${isMenuOpen ? "collapsed" : ""}`}
          ></span>
        </button>

        <div
          className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/" ? "active fw-bold" : ""
                }`}
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/about" ? "active fw-bold" : ""
                }`}
                to="/about"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/feedback" ? "active fw-bold" : ""
                }`}
                to="/feedback"
              >
                Feedback
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#!"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Tools
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#!">
                    Text Analysis
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#!">
                    Formatting
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#!">
                    Export Options
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          <div className="d-flex align-items-center gap-3">
            <form className="d-flex" role="search" onSubmit={handleSearch}>
              <div className="input-group">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search text..."
                  aria-label="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                  className="btn btn-outline-secondary"
                  type="submit"
                  disabled={!searchQuery.trim()}
                >
                  Go
                </button>
              </div>
            </form>

            <button
              className="btn btn-link text-decoration-none"
              onClick={toggleDarkMode}
              aria-label={`Switch to ${darkMode ? "light" : "dark"} mode`}
            >
              {darkMode ? (
                <Sun style={{ width: "24px", fill: "white" }} />
              ) : (
                <Moon style={{ width: "24px", fill: "black" }} />
              )}
            </button>

            <div className="dropdown">
              <button
                className="btn btn-primary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
              >
                Quick Actions
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => {
                      /* New document action */
                    }}
                  >
                    New Document
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => {
                      /* Import action */
                    }}
                  >
                    Import Text
                  </button>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/settings">
                    Settings
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  darkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
};

export default Navbar;
