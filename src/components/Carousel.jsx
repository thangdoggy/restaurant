import React from "react";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import BrushLine from "../img/brush-dec.png";

import Img4 from "../img/img4.jpg";
import Img5 from "../img/img5.jpg";
import Img1 from "../img/img1.jpg";
import Img2 from "../img/img2.jpg";

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src={Img1} onDragStart={handleDragStart} alt="presentation" />,
  <img src={Img4} onDragStart={handleDragStart} alt="presentation" />,
  <img src={Img2} onDragStart={handleDragStart} alt="presentation" />,
  <img src={Img5} onDragStart={handleDragStart} alt="presentation" />,
];

const Carousel = () => {
  return (
    <div className="">
      <AliceCarousel
        mouseTracking
        items={items}
        // autoWidth="false"
        autoPlay="true"
        autoPlayInterval="1500"
        infinite={true}
        animationType="fadeout"
        animationDuration="2000"
        responsive={{
          0: {
            items: 1,
            itemsFit: "contain",
          },
          768: { items: 2.5, itemsFit: "contain" },
          1024: {
            items: 3,
            itemsFit: "fill",
          },
        }}
      />
      <img src={BrushLine} alt="" className="w-full" />
    </div>
  );
};

export default Carousel;
