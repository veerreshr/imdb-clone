import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <nav className="navbar navbar-light navbar-expand-md navigation-clean-search">
      <div className="container">
        <Link to="/" className="navbar-brand">
          IMDB CLONE
        </Link>
        <button
          data-toggle="collapse"
          className="navbar-toggler"
          data-target="#navcol-1"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navcol-1">
          <ul className="nav navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Movies
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/actors" className="nav-link">
                Actors
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/producers" className="nav-link">
                Producers
              </Link>
            </li>
          </ul>
          <form className="form-inline mr-auto" target="_self">
            <div className="form-group">
              <label htmlFor="search-field">
                <i className="fa fa-search"></i>
              </label>
              <input
                className="form-control search-field"
                type="search"
                id="search-field"
                name="search"
                disabled
              />
            </div>
          </form>
          <Link
            to="/addMovie"
            className="btn btn-light action-button"
            role="button"
          >
            Add Movie
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
