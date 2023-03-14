import React from "react";
import "./Navbar.css";
import Logo from "assets/images/Logo.png";
import Basket from "assets/images/Basket.png";
import { Link } from "react-router-dom";
import { GlobalContext } from "context";

const Navbar = () => {
  const {
    states: { carts },
    actions: {},
  } = React.useContext(GlobalContext);

  return (
    <nav className="navbar position-sticky">
      <div className="container d-flex align-items-center justify-content-between">
        <div className="navbar-left">
          <Link
            to="/"
            className="d-flex align-items-center text-decoration-none"
          >
            <img className="logo" src={Logo} alt="Logo" />
            <div className="logo-text">Product App</div>
          </Link>
        </div>
        <div className="navbar-right position-relative">
          <Link to="/cart">
            <img className="basket-img" src={Basket} alt="Basket" />
            <span className="cart-count d-flex align-items-center justify-content-center position-absolute">
              {carts.length}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
