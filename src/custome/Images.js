import React from "react";
import "./images.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import img4 from "./theames/04.jpg";
import img5 from "./theames/05.jpg";
import img6 from "./theames/06.jpg";

function Images() {
  return (
    <div className="img">
      <AliceCarousel autoPlay autoPlayInterval={2000}>
        <img src={img4} alt="" className="sliderimg" />
        <img src={img5} alt="" className="sliderimg" />
        <img src={img6} alt="" className="sliderimg" />
      </AliceCarousel>
    </div>
  );
}

export default Images;
