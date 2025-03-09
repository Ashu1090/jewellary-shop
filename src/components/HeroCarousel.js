import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import car1 from "../assets/tem.webp"
import car2 from "../assets/nav.webp"
import car3 from "../assets/liva.webp"

import { FaArrowRight } from "react-icons/fa"

;


export default class SimpleSlider extends Component {



  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="carousel-contain mt-6">
        <Slider {...settings}>
          <div>
            <img src={car1} className="car-pic  l-10" />
          </div>

          <div>
            <img src="https://www.jcsjewellers.com/cdn/shop/collections/jcs_web_banners-06_1920x.jpg?v=1657795039"  className="car-pic" />
          </div>


        

          <div>
            <img src="https://www.jcsjewellers.com/cdn/shop/collections/JadauBangles_6a9720fd-27f1-4ded-b3bc-d85d8a7d2d7e_1920x.jpg?v=1657795217" className="car-pic" />
          </div>

          <div>
            <img src="https://www.jcsjewellers.com/cdn/shop/collections/Silver-Necklace_1920x.jpg?v=1657794949" className="car-pic" />
          </div>

          <div>
            <img src={car2} className="car-pic" />
          </div>

          <div>
            <img src={car3} className="car-pic" />
          </div>



        </Slider>
      </div>
    );
  }
}