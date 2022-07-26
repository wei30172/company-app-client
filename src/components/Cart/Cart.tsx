import React, { useState } from "react";
import useCount from "../../hooks/usetCartItemsCount";
import { PropsFromRedux, cartConnector } from "../../store/cart/connector";
import formatCurrency from "../../utils/formatCurrency";
import CartItem from "../CartItem/CartItem";
import CheckOutForm from "../CheckOutForm/CheckOutForm";
import "./Cart.scss";

interface Props extends PropsFromRedux {
  handleSetShowCart: () => void;
}

const Cart: React.FC<Props> = ({
  handleSetShowCart,
  cartItems,
  addToCartRequest,
  removeFromCartRequest,
  createOrderRequest,
}) => {
  const [showCheckOut, setShowCheckOut] = useState(false);

  const closeModal = () => {
    handleSetShowCart();
  };

  const [cartItemsCount] = useCount(cartItems);
  
  const calculateTotal = (items: IProduct[]) =>
    items.reduce(
      (totalItems: number, item) => totalItems + item.price * item.count,
      0,
    );

  return !cartItems ? (
    <div>Loading...</div>
  ) : (
    <div className="cart">
      {cartItems.length === 0 ? (
        <div className="cart_header">Cart is empty</div>
      ) : (
        <div className="cart_header">
          You have {cartItemsCount} products in the cart
        </div>
      )}

      {cartItems.map((item) => (
        <CartItem
          key={item._id}
          item={item}
          addToCartRequest={addToCartRequest}
          removeFromCartRequest={removeFromCartRequest}
        />
      ))}
      {cartItems.length !== 0 && (
        <>
          <h2>Total: ${formatCurrency(calculateTotal(cartItems))}</h2>
          <button
            className="btn proceed_botton"
            onClick={() => setShowCheckOut(true)}
          >
            Proceed
          </button>
          {showCheckOut && (
            <CheckOutForm
              cartItems={cartItems}
              total={formatCurrency(calculateTotal(cartItems))}
              createOrderRequest={createOrderRequest}
              closeModal={closeModal}
            />
          )}
        </>
      )}
    </div>
  );
};

export default cartConnector(Cart);
