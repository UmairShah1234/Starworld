import React from "react";

const HeroSection = () => {
  return (
    <div className="my-3">
      <div className="row container">
        <div className="col-md-8 ">
          <div className="m-5">
            <div className="my-3">
              <h2>Empowering Tomorrow's Innovations</h2>
              <h2>Welcome to Starworld</h2>
            </div>
            <p className="py-3">
              Welcome to Starworld, where innovation meets excellence. Our
              mission is to lead the way in shaping the future of technology and
              beyond. With a dedication to quality, creativity, and
              forward-thinking solutions, we are committed to empowering
              businesses and individuals alike. Explore our world of
              possibilities and discover how Starwart can transform your vision
              into realit
            </p>
            <button className="btn btn-dark">Find More &#8595;</button>
          </div>
        </div>
        <div className="col-md-4 ">
          
          <img src="/assets/Hero-image.png " alt="" className="hero-img-top  rounded-circle p-1"/>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
