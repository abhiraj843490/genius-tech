import "./successStories.css";
import dca from "./theames/3.jpg";
import bn from "./theames/5.jpg";
import out from "./theames/4.jpg";
function SuccessStories() {
  return (
    <div className="success">
      <h1>Success Stories</h1>
      <div className="story">
        <div className="col">
          <img
            src={dca}
            alt="dca"
            style={{ width: "100%", height: "300px", transition: ".5s ease" }}
          />
          <div class="centered">Teacher's day celebration </div>
        </div>

        <div className="col">
          <img
            src={out}
            alt="dca"
            style={{ width: "100%", height: "300px", transition: ".5s ease" }}
          />
          <div class="centered">Genius tech family</div>
        </div>
        <div className="col">
          <img
            src={bn}
            alt="dca"
            style={{ width: "100%", height: "300px", transition: ".5s ease" }}
          />
          <div class="centered">We are all togather</div>
        </div>
      </div>
    </div>
  );
}

export default SuccessStories;
