import React from "react";
import ProductCarousel from "./ProductCarousel";

const SeeMoreProducts = () => {
  return (
    <>
      <div className="accordion m-5 shadow" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button text-dark border border-primary"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>See More Products &#x2B9F;</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ProductCarousel />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SeeMoreProducts;
