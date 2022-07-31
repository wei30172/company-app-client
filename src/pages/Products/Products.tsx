import React, { useState } from "react";
import { PropsFromRedux, authConnector } from "../../store/auth/connector";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import useCount from "../../hooks/usetCartItemsCount";
import { ScrollBtn } from "../../components";
import { Cart, Filter, Pagination, ProductsList } from "../../features";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Close from "@material-ui/icons/Close";
import "./Products.scss";

const Products = ({ cartItems }: PropsFromRedux) => {
  const [cartItemsCount] = useCount(cartItems);
  const [showCart, setShowCart] = useState(false);
  const { inputRef, handleScrollTop } = useScrollToTop(200);

  const handleSetShowCart = () => {
    setShowCart(!showCart);
    handleScrollTop();
  };

  return (
    <div ref={inputRef} className="products">
      {/* cart */}
      <>
        {showCart ? (
          <Close
            className="cart-button cursor-pointer"
            onClick={handleSetShowCart}
          />
        ) : (
          <>
            <ShoppingCartIcon
              className="cart-button cursor-pointer"
              onClick={handleSetShowCart}
            />
            <div className="cart-count cursor-pointer">{cartItemsCount}</div>
          </>
        )}
      </>

      <ScrollBtn handleScrollTop={handleScrollTop} />

      <div className="products_main">
        <div className="main">
          <Filter />
          <ProductsList />
          <Pagination />
        </div>
        {showCart && (
          <div className="sidebar">
            <Cart />
          </div>
        )}
      </div>
    </div>
  );
};

export default authConnector(Products);
