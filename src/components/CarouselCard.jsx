import React from "react";
import { Link } from "react-scroll";

const CarouselCard = ({ product }) => {
  return (
    <div>
      <div className="card rounded-0 text-center shadow mx-1">
        <div className="card-body">
          <p className="card-text text-wrap">
            <img src={"/assets/HEC.jpg"} alt="" className="carousel-img" />
          </p>
        </div>
        <div className="card-footer text-muted">
          {" "}
          <Link
            to="homesection"
            className=" btn btn-primary text-light rounded-0"
            smooth={true}
            onClick={() => {
              const element = document.getElementById("contactSection");
              element?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Inquire
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;
