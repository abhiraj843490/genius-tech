import React from "react";
import "./images.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

// import img1 from "./001.jpg";
import img2 from "./theames/002.jpg";
// import img3 from "./theames/03.jpg";
import img4 from "./theames/04.jpg";
import img5 from "./theames/05.jpg";
import img6 from "./theames/06.jpg";

function Images() {
  return (
    <div className="img">
      <AliceCarousel autoPlay autoPlayInterval={2000}>
        {/* <img src={img1} alt="" className="sliderimg" /> */}
        <img src={img2} alt="" className="sliderimg" />
        {/* <img src={img3} alt="" className="sliderimg" /> */}
        <img src={img4} alt="" className="sliderimg" />
        <img src={img5} alt="" className="sliderimg" />
        <img src={img6} alt="" className="sliderimg" />
      </AliceCarousel>
    </div>
  );
}

export default Images;
