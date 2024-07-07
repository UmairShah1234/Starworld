import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CarouselCard from "./CarouselCard";
import image1 from './../assets/pic1.png';
import image2 from './../assets/pic2.png';
import image3 from './../assets/pic3.png';
import image4 from './../assets/pic4.png';
import image5 from './../assets/pic5.png';
import image6 from './../assets/pic6.png';

const ProductCarouselCards1 = () => {
  const products = [
    {
      no: 1,
      image: image1,
    },
    {
      no: 2,
      image: image2,
    },
    {
      no: 3,
      image: image3,
    },
    {
      no: 4,
      image: image4,
    },
    {
      no: 5,
      image: image5,
    },
    {
      no: 6,
      image: image6,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          className: "center",
          centerMode: true,
          infinite: true,
          centerPadding: "60px",
          slidesToShow: 3,
          speed: 500,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: false,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <div className="">
      {" "}
      <Slider {...settings}>
        {products.map((product) => (
          <CarouselCard product={product} key={product.no}/>
        ))}
      </Slider>
    </div>
  );
};

export default ProductCarouselCards1;
