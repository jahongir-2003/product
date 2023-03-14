import React from "react";
import "./Card.css";
import BasketImage from "assets/images/BasketForCard.png";
import CancelBagImage from "assets/images/CancelBag.png";
import Minus from "assets/images/Minus.png";
import Plus from "assets/images/Plus.png";
import { GlobalContext } from "context";
import { useUpdateCart } from "hooks";
import { toast } from "react-toastify";
import { CART_ACTIONS_STATUS } from "constants/common";

const Card = ({ product }) => {
  const [updateCart] = useUpdateCart();

  const {
    states: { carts },
    actions: { setCarts },
  } = React.useContext(GlobalContext);

  const findIndex = React.useMemo(() => {
    return carts.findIndex((cart) => cart.id === product.id);
  }, [carts]);

  const addToCart = () => {
    updateCart(carts.concat({ ...product, amount: 1 }), {
      status: CART_ACTIONS_STATUS.add,
      title: product.title,
    });
  };

  const cartProduct = React.useMemo(() => {
    if (findIndex == -1)
      return {
        isAvaible: false,
      };
    return {
      isAvaible: true,
      amount: carts[findIndex].amount,
    };
  }, [carts]);

  const incrementAmount = () => {
    carts[findIndex].amount++;
    updateCart(carts);
  };
  const decrementAmount = () => {
    if (carts[findIndex].amount > 1) {
      carts[findIndex].amount--;
      updateCart(carts);
    }
  };

  const removeToCart = () => {
    carts.splice(findIndex, 1);
    updateCart(carts, {
      status: CART_ACTIONS_STATUS.remove,
      title: product.title,
    });
  };

  return (
    <div className="product-card h-100 position-relative">
      <div className="product-card-header d-flex align-items-center justify-content-center bg-white p-3">
        <span className="product-card-rate bg-warning position-absolute d-flex align-items-center justify-content-center">
          {product.rating?.rate}
        </span>
        <img
          className="card-product-img img-fluid"
          src={product.image}
          alt={product.title}
        />
        <span className="product-count position-absolute bg-danger d-flex align-items-center justify-content-center text-white">
          count: {product.rating?.count}
        </span>
      </div>
      <div className="product-card-body">
        <h6 className="product-category text-warning fw-bold text-uppercase">
          {product.category}
        </h6>
        <h5 className="product-title text-dark my-3">{product.title}</h5>
        <p className="product-description text-danger">{product.description}</p>
        <p className="product-price text-success fw-bold mt-2">
          {product.price} &#36;
        </p>
      </div>
      <div className="product-card-footer d-flex  align-items-stretch justify-content-between">
        {!cartProduct.isAvaible ? (
          <button
            className="btn btn-success d-block w-100 d-flex align-items-center justify-content-center"
            onClick={addToCart}
          >
            Add to Cart
            <img
              width="25px"
              height="25px"
              src={BasketImage}
              alt="Add to Card"
              className="ms-3"
            />
          </button>
        ) : (
          <>
            <button
              onClick={removeToCart}
              className="remove-btn btn btn-danger w-50 d-flex align-items-center justify-content-center"
            >
              Remove to Cart
              <img
                className="ms-2"
                width="20px"
                height="20px"
                src={CancelBagImage}
                alt="Remove to Cart"
              />
            </button>
            <div className="count-box ms-3 d-flex align-items-center justify-content-center">
              <button
                className="btn btn-warning"
                disabled={carts[findIndex].amount < 2}
                onClick={decrementAmount}
              >
                <img width="20px" height="20px" src={Minus} alt="minus btn" />
              </button>
              <div className="count mx-3 text-dark fw-bold">
                {cartProduct.amount}
              </div>
              <button className="btn btn-success" onClick={incrementAmount}>
                <img width="20px" height="20px" src={Plus} alt="plus btn" />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
