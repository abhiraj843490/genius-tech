import React from "react";
import { Link, NavLink } from "react-router-dom";
import logoImg from "./theames/logo.jpg";
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

        <div className="about">
          <NavLink to="/course" style={{ textDecoration: "none" }}>
            Courses
          </NavLink>
          <NavLink to="/about" style={{ textDecoration: "none" }}>
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
