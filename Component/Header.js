import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <React.Fragment>
      {/* Top Bar with Contact Info */}
      <div className="top-bar">
        <div className="container d-flex justify-content-end">
          <p className="contact-info">
            📞 6360741400 | ✉️ shreenidhi69246@gmail.com
          </p>
        </div>
      </div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-info">
        <div className="container">
          <NavLink to="/" className="navbar-brand text-white">
            <strong>DevOps</strong>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Userlist" className="nav-link">
                  User List
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/adduser" className="nav-link">
                  Add User
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/productlist" className="nav-link">
                  Product List
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/addproduct" className="nav-link">
                  Add Product
                </NavLink>
              </li>
            </ul>

            {/* Search Bar */}
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-light search-btn" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      {/* Custom Styles */}
      <style>
        {`
          .top-bar {
            background-color: #17a2b8; /* Bootstrap 'info' color */
            padding: 5px 0;
            color: white;
            font-size: 14px;
          }
          .contact-info {
            margin: 0;
            font-weight: bold;
          }
          .navbar-nav .nav-link {
            font-size: 16px;
            font-weight: bold;
            color: white !important;
            transition: all 0.3s ease-in-out;
          }
          .navbar-nav .nav-link:hover {
            color: #0a3d62 !important; /* Dark blue on hover */
            transform: scale(1.05);
          }
          .search-btn {
            color: #17a2b8;
            border: 2px solid white;
            transition: all 0.3s ease-in-out;
          }
          .search-btn:hover {
            background-color: #0a3d62;
            color: white;
            transform: scale(1.1);
          }
          .navbar-brand {
            font-size: 20px;
            transition: all 0.3s ease-in-out;
          }
          .navbar-brand:hover {
            color: #0a3d62 !important;
            transform: scale(1.1);
          }
        `}
      </style>
    </React.Fragment>
  );
}

export default Header;
