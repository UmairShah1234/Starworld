import React, { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [pro, setPro] = useState(null);

  // Function to set a single product
  const setSingleProduct = (productData) => {
    setPro(productData);
  };

  // Function to clear the single product
  const clearSingleProduct = () => {
    setProduct(null);
    return (
      <ProductContext.Provider
        value={{ pro, setSingleProduct, clearSingleProduct }}
      >
        {children}
      </ProductContext.Provider>
    );
  };
};

// export default ProductProvider;
