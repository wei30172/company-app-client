import React, { useState } from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Close from "@material-ui/icons/Close";
import { ProductsList, Cart, ScrollBtn, ProductsNavbar } from "../../components";
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
      <ProductsNavbar />
      {showCart ? (
        <Close
          className="cart-button cursor-pointer"
          onClick={handleSetShowCart}
        />
      ) : (
        <ShoppingCartIcon
          className="cart-button cursor-pointer"
          onClick={handleSetShowCart}
        />
      )}
      <ScrollBtn handleScrollTop={handleScrollTop} />
      
      <div className="products_main">
        <div className="main">
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
