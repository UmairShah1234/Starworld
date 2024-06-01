import React from "react";

const ProductCarouselCards = ({ productImage }) => {
  return (
    <div className="card m-1">
      <div className="p-3   text-center">
        <img src={productImage} className="card-img-top" alt="..." />
      </div>
      <div className="text-center d-flex justify-content-center">
        <p className=" btn btn-outline-primary rounded-0">Inquire</p>
      </div>
    </div>
  );
};

export default ProductCarouselCards;
