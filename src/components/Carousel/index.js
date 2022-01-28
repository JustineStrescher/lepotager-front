import './carousel.scss';

import Slider from 'infinite-react-carousel';

import data from 'src/CarouselData';

const CustomSlider = () => {
  const settings = {
    accessibility: false,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 6000,
    centerMode: true,
    arrows: false,
    dots: true,
    duration: 300,
    swipe: true,
  };

  return (
    <div className="Carousel">
      <Slider {...settings} key="carousel">
        {data.map((carousel) => (
          <div className="Carousel--div" key={carousel.id}>
            <h3>{carousel.caption}</h3>
            <img src={carousel.image} alt="" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomSlider;
