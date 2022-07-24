import React, { useState } from "react";
import {
  ProductsNavbar,
  Filter,
  ProductsList,
  Cart,
  ScrollBtn,
} from "../../components";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import "./Products.scss";

const Products = () => {
  const [showCart, setShowCart] = useState(false);
  const { inputRef, handleScrollTop } = useScrollToTop(200);

  const handleSetShowCart = () => {
    setShowCart(!showCart);
    handleScrollTop();
  };

  return (
    <div ref={inputRef} className="products">
      <ProductsNavbar
        showCart={showCart}
        handleSetShowCart={handleSetShowCart}
      />
      <ScrollBtn handleScrollTop={handleScrollTop} />

      <div className="products_main">
        <div className="main">
          <Filter />
          <ProductsList />
        </div>
        {showCart && (
          <div className="sidebar">
            <Cart handleSetShowCart={handleSetShowCart} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
