import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CarouselCard from "./CarouselCard";

const ProductCarouselCards1 = () => {
  const products = [
    {
      no: 1,
      image: "/assets/pic1.png",
    },
    {
      no: 2,
      image: "/assets/pic2.png",
    },
    {
      no: 3,
      image: "/assets/pic3.png",
    },
    {
      no: 4,
      image: "/assets/pic4.png",
    },
    {
      no: 5,
      image: "/assets/pic5.png",
    },
    {
      no: 6,
      image: "/assets/pic6.png",
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
          <CarouselCard product={product} key={product.no}/>
        ))}
      </Slider>
    </div>
  );
};

export default ProductCarouselCards1;
