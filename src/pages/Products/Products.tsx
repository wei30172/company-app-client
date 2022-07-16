import React, { useState } from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Close from "@material-ui/icons/Close";
import { ProductsList, Cart } from "../../components";
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
      {showCart ? (
        <Close className="cart-button" onClick={handleSetShowCart} />
      ) : (
        <ShoppingCartIcon className="cart-button" onClick={handleSetShowCart} />
      )}
      <div className="main">
        <ProductsList />
      </div>
      {showCart && (
        <div className="sidebar">
          <Cart handleSetShowCart={handleSetShowCart} />
        </div>
      )}
    </div>
  );
};

export default Products;
