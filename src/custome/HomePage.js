import Images from "./Images";
import "./homepage.css";
import innov from "./theames/innov.svg";
import gwth from "./theames/grwth.svg";
import lrn from "./theames/lrn.svg";
import dca from "./theames/04.jpg";
import SuccessStories from "./SuccessStories";
function HomePage() {
  return (
    <div className="abt">
      <Images />
      <div className="image-text">
        <p>
          <h2>Genius tech</h2>A computer Institute
        </p>
      </div>
      <div className="body">
        <div className="ab">
          <div className="left">
            <div className="content">
              <h1>About Genius tech</h1>
              <p>
                Genius Tech, A computer institute is a premier computer
                institute that excels in knowledge transformation. Its
                commitment to excellence, industry alignment, practical
                education, and support for students' career advancement make it
                the ideal choice for those aspiring to succeed in the tech
                industry. Through experienced faculty, cutting-edge resources,
                and hands-on learning, Genius Tech empowers students to
                fast-track their tech careers.
              </p>
            </div>
          </div>
          <div className="right">
            <img
              src={dca}
              alt="dca"
              style={{ width: "100%", height: "100%", transition: ".5s ease" }}
            />
          </div>
        </div>
      </div>
      <SuccessStories />

      <div className="info">
        <h1>Want to join Our Team</h1>
        <p>
          Genius tech is a dynamic Institute with countless opportunities for
          career development. We believe that our success lies upon the skills
          and quality of our talented resources. Hence, we inspire our people to
          successfully unleash their full career potential synergized with our
          educational and business growth .
        </p>
        <img
          src={innov}
          alt="ab"
          style={{ width: "100px", marginRight: "10px" }}
        />
        <h2>Innovation</h2>
        <img
          src={gwth}
          alt="ab"
          style={{ width: "100px", marginRight: "10px" }}
        />
        <h2>Growth</h2>
        <img
          src={lrn}
          alt="ab"
          style={{ width: "100px", marginRight: "10px" }}
        />
        <h2>Learning</h2>
      </div>
    </div>
  );
}
export default HomePage;
