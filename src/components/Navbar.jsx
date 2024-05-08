import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";

function Navbar() {
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="nav-container font-semibold sticky top-0 bg-[#0e1c26]">
      <div className="nav-links-container w-full p-5 flex items-center px-20">
        <div className="logo-menu w-1/2 flex items-center justify-between">
          <Link to="/" className="logo-name">
            Siddhu.
          </Link>
          <Link className="menu" onClick={() => setMenuOpen(!menuOpen)}>
            <IoIosMenu className="menu-icon text-white text-2xl hidden" />
          </Link>
        </div>

        <div className={menuOpen ? "open" : "aspec-links"}>
          <Link
            className={`nav-links ${
              location.pathname === "/about" ? "active" : ""
            }`}
            to="/about">
            About
          </Link>
          <Link
            className={`nav-links ${
              location.pathname === "/skills" ? "active" : ""
            }`}
            to="/skills">
            Skills
          </Link>
          <Link
            className={`nav-links ${
              location.pathname === "/projects" ? "active" : ""
            }`}
            to="/projects">
            Projects
          </Link>
          <Link
            className={`nav-links ${
              location.pathname === "/education" ? "active" : ""
            }`}
            to="/education">
            Education
          </Link>
          <Link
            className={`nav-links ${
              location.pathname === "/contact" ? "active" : ""
            }`}
            to="/contact">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
