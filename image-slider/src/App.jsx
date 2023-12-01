import "./App.css";
import React from "react";
import CarouselCardContainer from "./components/CarouselCardContainer";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useRef, useEffect, useState } from "react";

function App() {
  const CarouselRef = useRef(null);

  const maxScrollWidthCarousel = useRef(0); // referring the maxScrollWidth of the carousel
  const [currentIndex, setCurrentIndex] = useState(0); // to refer to the page visible on the carousel

  // To change the index when left arrow is pressed
  const ScrollLeft = () => {
    console.log("curentIndexL", currentIndex);
    console.log("L", CarouselRef.current);
    if (currentIndex > 0) {
      setCurrentIndex((previousValue) => previousValue - 1);
    }
  };

  // To change the index when right arrow is pressed
  const ScrollRight = () => {
    if (
      CarouselRef.current != null &&
      CarouselRef.current.offsetWidth * currentIndex <=
        maxScrollWidthCarousel.current
    ) {
      setCurrentIndex((previousValue) => previousValue + 1);
    }
  };
  //To disable the left/right scroll button when no more content to move either side
  const isDisabled = (direction) => {
    console.log(direction, currentIndex, CarouselRef.current);
    if (direction === "left") {
      let val = currentIndex <= 0;
      console.log(val);
      return val; //returns true when index<=0
    }

    if (direction === "right" && CarouselRef.current !== null) {
      let val =
        CarouselRef.current.offsetWidth * currentIndex >=
        maxScrollWidthCarousel.current;
      console.log(val);
      return (
        CarouselRef.current.offsetWidth * currentIndex >=
        maxScrollWidthCarousel.current // returns true when the width of the carousel(current visible size) * current page(current index value) >= max scroll width of carousel content
      );
    }
    return false; // else disabled is false
  };

  // useEffect to trigger scrolling when currentIndex changes on scrollLeft click or scrollRightClick
  useEffect(() => {
    if (CarouselRef !== null && CarouselRef.current !== null) {
      CarouselRef.current.scrollLeft =
        CarouselRef.current.offsetWidth * currentIndex;
      // scroll left ppty of an element gets or sets the no. of pxs that an elements content is scrolled from its left edge
    }
  }, [currentIndex]);

  // to set maxscrollwidth of the caurosel(Total scrolable content width- currently visible offset width) on initial render
  useEffect(() => {
    maxScrollWidthCarousel.current = CarouselRef.current
      ? CarouselRef.current.scrollWidth - CarouselRef.current.offsetWidth
      : 0;
  }, []);
  return (
    <>
      <div>
        <h2>Image Slider</h2>
        <div className="Carouselcontainer">
          <button
            className={isDisabled("left") ? "pre-btn disabled" : "pre-btn"}
          >
            <FaAngleLeft size={40} className="arrow_btn" onClick={ScrollLeft} />
          </button>

          <button
            className={isDisabled("right") ? "nxt-btn disabled" : "nxt-btn"}
          >
            <FaAngleRight
              size={40}
              className="arrow_btn"
              onClick={ScrollRight}
            />
          </button>
          <CarouselCardContainer CarouselRef={CarouselRef} />
        </div>
      </div>
    </>
  );
}

export default App;
