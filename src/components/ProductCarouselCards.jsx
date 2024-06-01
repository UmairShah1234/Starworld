import React from "react";
import { Link } from "react-scroll";

const ProductCarouselCards = ({ productImage }) => {
  return (
    <div className="card m-1">
      <div className="p-3   text-center">
        <img src={productImage} className="card-img-top" alt="..." />
      </div>
      <div className="text-center d-flex justify-content-center">
        <Link
          to="homesection"
          className=" btn btn-primary text-light rounded-0 m-1"
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
  );
};

export default ProductCarouselCards;
