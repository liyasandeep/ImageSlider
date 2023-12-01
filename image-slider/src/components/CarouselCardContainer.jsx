import React from "react";
import brand1 from "../assets/images/agv.jpg";
import brand2 from "../assets/images/bell.jpg";
import brand3 from "../assets/images/hjc.png";
import brand4 from "../assets/images/shark.png";
import brand5 from "../assets/images/arai.png";
import Carouselcard from "./Carouselcard";
const CarouselCardContainer = ({ CarouselRef }) => {
  const brandsList = [
    {
      id: 1,
      // src: require("../assets/images/agv.jpg"),
      src: brand1,
      alt: "Brand 1",
    },
    {
      id: 2,
      src: brand2,
      // src: require("../assets/images/bell.jpg"),
      alt: "Brand 2",
    },
    {
      id: 3,
      src: brand3,
      alt: "Brand 3",
    },
    {
      id: 4,
      src: brand4,
      alt: "Brand 4",
    },
    {
      id: 5,
      src: brand5,
      alt: "Brand 4",
    },
    {
      id: 6,
      src: brand3,
      alt: "Brand 3",
    },
    {
      id: 7,
      src: brand2,
      alt: "Brand 2",
    },
    {
      id: 8,
      src: brand4,
      alt: "Brand 4",
    },
    {
      id: 9,
      src: brand1,
      alt: "Brand 1",
    },
  ];

  return (
    <div className="CarouselCardContainer" ref={CarouselRef}>
      {brandsList.map((brand, index) => (
        <Carouselcard brand={brand} key={index} />
      ))}
    </div>
  );
};

export default CarouselCardContainer;
