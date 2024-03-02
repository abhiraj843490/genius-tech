import React from "react";
import "./about.css";
import dhramendra from "./theames/dh.jpg";
import abhi from "./theames/av.jpg";

function About() {
  return (
    <div className="abt">
      <div className="card-1">
        <p>
          Welcome to
          <ul>
            <b>Genius tech</b> A Computer Institute,
          </ul>
          your gateway to cutting-edge computer education and skills
          development. Established in <b>2023</b>, we have been at the forefront
          of nurturing tech talent and empowering individuals to excel in the
          dynamic world of technology.
          <ul>
            <b>Add: Main Road, Noorsarai Near- PNB Bank (Nalanda)</b>
          </ul>
        </p>
      </div>

      <div className="card-2">
        <p>
          Meet with Our Director
          <ul>
            <b>Dharmendra Kumar</b>,
          </ul>
          I'm <b>Dharmendra Kumar, </b>an experienced educator with over{" "}
          <b>2+ years</b> of dedicated teaching experience. My journey in the
          field of education has equipped me with a strong grasp of both
          practical and theoretical concepts, which I believe are crucial for
          fostering effective learning environments.
          <ul>
            <b>Contact No. 9162560850</b>
          </ul>
        </p>
      </div>

      <div className="card-1">
        <p>
          Meet with Our Principal
          <ul>
            <b>Abhiraj Kumar</b>,
          </ul>
          I am <b>Abhiraj Kumar,</b> an experienced IT professional with a
          strong background in a diverse range of technologies. Holding the
          title of a certified Computer Engineer, I bring a wealth of expertise
          to the table.
          <ul>
            <b>Contact No. 6204178561</b>
          </ul>
        </p>
      </div>

      <div className="intro">
        <div className="about-section">
          <h1>Intro with me</h1>
        </div>

        <h2 style={{ textAlign: "center" }}>Our Team</h2>

        <div className="row">
          <div className="column">
            <div className="about-card">
              <img src={dhramendra} alt="dhramendra" style={{ width: "50%" }} />
              <div className="container">
                <h2>Dhramendra Kumar</h2>
                <p className="title">Founder & Director</p>
                <p>
                  <b>
                    <i>
                      Bachelor degree, B.Ed <br /> Computer specialist
                    </i>
                  </b>
                </p>

                <p>
                  <a
                    href="E-mailto:geniustech9162@gmail.com"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    E-mail: geniustech9162@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="about-card">
              <img src={dhramendra} alt="Mike" style={{ width: "50%" }} />
              <div className="container">
                <h2>Dhramendra Kumar</h2>
                <p className="title">Teacher (3+ years)</p>
                <p>
                  <i>
                    <b>
                      Bachelor degree, B.Ed <br /> Computer specialist
                    </b>
                  </i>
                </p>

                <p>
                  <a
                    href="E-mailto:geniustech9162@gmail.com"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    E-mail: geniustech9162@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="about-card">
              <img src={abhi} alt="Abhiraj" style={{ width: "50%" }} />
              <div className="container">
                <h2>Abhiraj Kumar</h2>
                <p className="title">Principal</p>
                <p>
                  <i>
                    <b>
                      Bachelor of Engineering
                      <br /> Industrial Experience(Software developer)
                    </b>
                  </i>
                </p>
                <p>
                  <a
                    href="E-mailto:geniustech9162@gmail.com"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    E-mail: geniustech9162@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
