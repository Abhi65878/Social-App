import React, { useState, useEffect } from "react";
import "./Button.css";

const Button = () => {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileOrTablet(window.innerWidth <= 1024); 
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="header">
      {isMobileOrTablet && (
        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? "Close Menu" : "Menu"}
        </button>
      )}
      <div
        className={`menu-buttons ${
          isMobileOrTablet ? (menuOpen ? "open" : "closed") : ""
        }`}
        aria-expanded={menuOpen}
      >
        <button className="button">Internships</button>
        <button className="button">Jobs</button>
        <button className="button">Seminar</button>
        <button className="button">Workshop</button>
        <button className="button">Tech</button>
        <button className="button">Events</button>
      </div>
    </div>
  );
};

export default Button;
