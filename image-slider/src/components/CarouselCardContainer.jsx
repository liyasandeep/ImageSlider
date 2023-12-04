import React from "react";
import brand1 from "../assets/images/1.jpg";
import brand2 from "../assets/images/2.jpg";
import brand3 from "../assets/images/3.jpg";
import brand4 from "../assets/images/4.jpg";
import brand5 from "../assets/images/5.jpg";
import brand6 from "../assets/images/6.jpg";
import brand7 from "../assets/images/7.jpg";
import brand8 from "../assets/images/8.jpg";
import brand9 from "../assets/images/9.jpg";
import brand10 from "../assets/images/10.jpg";
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
      alt: "Brand 5",
    },
    {
      id: 6,
      src: brand6,
      alt: "Brand 6",
    },
    {
      id: 7,
      src: brand7,
      alt: "Brand 7",
    },
    {
      id: 8,
      src: brand8,
      alt: "Brand 8",
    },
    {
      id: 9,
      src: brand9,
      alt: "Brand 9",
    },
    {
      id: 10,
      src: brand10,
      alt: "Brand 10",
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
