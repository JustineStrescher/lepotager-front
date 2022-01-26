// import { Carousel } from 'react-carousel-minimal';
import './carousel.scss';
// import React, { Component } from 'react';
import Slider from 'infinite-react-carousel';

import data from 'src/CarouselData';

const CustomSlider = () => {
  // render() {
  const settings = {
    accessibility: false,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 6000,
    centerMode: true,
    // centerPadding: 200,
    arrows: false,
    dots: true,
    duration: 300,
    // initialSlide: 1,
    // overScan: 1,
    // shift: 50,
    swipe: true,
    // virtualList: true,
  };

  return (
    <div className="Carousel">
      <Slider {...settings}>
        {data.map((carousel) => (
          <div className="Carousel--div">
            <h3>{carousel.caption}</h3>
            <img src={carousel.image} alt="" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomSlider;
