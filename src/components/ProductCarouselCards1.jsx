import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CarouselCard from "./CarouselCard";

const ProductCarouselCards1 = () => {
  const products = [
    {
      image: "/assets/FLGPWM.jpg",
    },
    {
      image: "/assets/FLGPMWFTA.jpg",
    },
    {
      image: "/assets/FAFLGWDM.jpg",
    },
    {
      image: "/assets/SLGTPWM.jpg",
    },
    {
      image: "/assets/SLGTPWMDD.jpg",
    },
    {
      image: "/assets/DTWFTA.jpg",
    },
    {
      image: "/assets/HEC.jpg",
    },
    {
      image: "/assets/DT.jpg",
    },
    {
      image: "/assets/SLGTPWMDD.jpg",
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
    <div className="row">
      {" "}
      <Slider {...settings}>
        {products.map((product) => (
          <CarouselCard product={product} />
        ))}
      </Slider>
    </div>
  );
};

export default ProductCarouselCards1;
