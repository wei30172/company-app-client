import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PropsFromRedux, authConnector } from "../../store/auth/connector";
import CloseIcon from "@material-ui/icons/Close";
import MenuIcon from "@material-ui/icons/Menu";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Close from "@material-ui/icons/Close";
import "./Navbar.scss";

interface Props extends PropsFromRedux {
  showCart: boolean;
  handleSetShowCart: () => void;
}

const Navbar = ({
  cartItems,
  token,
  logoutRequest,
  showCart,
  handleSetShowCart,
}: Props) => {
  const navigate = useNavigate();
  const [showMobMenu, setShowMobMenu] = useState(false);
  const [cartItemsCount, setCartItemsCount] = useState(0);

  useEffect(() => {
    if (cartItems.length > 0) {
      setCartItemsCount(
        cartItems.reduce((total, item) => total + item.count, 0),
      );
    }
  }, [cartItems]);

  const handleLogout = () => {
    localStorage.removeItem("auth");
    logoutRequest();
  };

  return (
    <div className="products-navbar">
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

      {/* menu */}
      <div className="navbar_menu">
        <ul>
          <li className="cursor-pointer" onClick={() => navigate("/")}>
            Home
          </li>
          {token ? (
            <li className="cursor-pointer" onClick={() => handleLogout()}>
              Logout
            </li>
          ) : (
            <li className="cursor-pointer" onClick={() => navigate("/login")}>
              Login
            </li>
          )}
        </ul>
      </div>

      {/* hamburger */}
      <div
        onClick={() => setShowMobMenu(!showMobMenu)}
        className="navbar_hamburger"
      >
        {!showMobMenu ? (
          <MenuIcon className="cursor-pointer" />
        ) : (
          <CloseIcon className="cursor-pointer" />
        )}
      </div>

      {/* mobile menu */}
      <ul className={!showMobMenu ? "navbar_hidden" : "navbar_mobile-menu"}>
        <li className="cursor-pointer" onClick={() => navigate("/")}>
          Home
        </li>
        {token ? (
          <li className="cursor-pointer" onClick={() => handleLogout()}>
            Logout
          </li>
        ) : (
          <li className="cursor-pointer" onClick={() => navigate("/login")}>
            Login
          </li>
        )}
      </ul>
    </div>
  );
};

export default authConnector(Navbar);
