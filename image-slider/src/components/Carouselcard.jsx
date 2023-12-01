import React from "react";

const Carouselcard = ({ brand }) => {
  return (
    <div className="Carouselcard" key={brand.id}>
      <img className="carouselimage" src={brand.src} alt={brand.alt} />
    </div>
  );
};

export default Carouselcard;
