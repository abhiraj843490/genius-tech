import React from "react";
import { Link, NavLink } from "react-router-dom";
import logoImg from "./theames/logo.png";
import "./title.css";

function TitlePage() {
  return (
    <>
      <div className="header">
        <div className="logo">
          <Link to="/genius-tech">
            <img src={logoImg} alt="Genius tech" />
          </Link>
        </div>

        <div className="navlink">
          <NavLink  to="/course"  className={({ isActive }) => (isActive ? "active" : "inactive")}>
            Courses
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "inactive")}>
            About
          </NavLink>
          {/* <NavLink to="/careers" style={{ textDecoration: "none" }}>
            Careers
          </NavLink> */}
        </div>
      </div>
    </>
  );
}

export default TitlePage;
