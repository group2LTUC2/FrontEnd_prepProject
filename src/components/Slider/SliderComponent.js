import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SliderComponent.css';

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 5000 
  };

  return (
    <div className="slider-component">
      <Slider {...settings}>
        <div>
          <img src="https://img.freepik.com/free-vector/ramadan-kareem-banner-with-hanging-lamp-stars_1017-30846.jpg?size=626&ext=jpg&uid=R97189071&ga=GA1.2.1879009063.1675089754&semt=ais" alt="Ad 1" />
        </div>
        <div>
          <img src="https://img.freepik.com/free-vector/ramadan-kareem-banner-with-hanging-lamp-stars_1017-30846.jpg?size=626&ext=jpg&uid=R97189071&ga=GA1.2.1879009063.1675089754&semt=ais" alt="Ad 2" />
        </div>
        <div>
          <img src="https://img.freepik.com/free-vector/beautiful-ramadan-kareem-wide-banner-black-golden-style_1017-30566.jpg?size=626&ext=jpg&uid=R97189071&ga=GA1.1.1879009063.1675089754&semt=ais" alt="Ad 3" />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComponent;