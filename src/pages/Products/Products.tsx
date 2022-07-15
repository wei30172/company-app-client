import React from "react";
import { ProductsList } from "../../components";
import { useScrollToTop } from "../../hooks/useScrollToTop";

const Products = () => {
  const { inputRef } = useScrollToTop(200);

  return (
    <div ref={inputRef} className="products">
      <ProductsList />
    </div>
  );
};

export default Products;
