import { GlobalContext } from "context";
import React from "react";

const TotalPrice = () => {
  const {
    states: { carts },
    actions: {},
  } = React.useContext(GlobalContext);

  const totalPrice = carts.reduce(
    (sum, product) => (sum += product.price * product.amount),
    0
  );

  return (
    <h6 className="total-price d-flex align-items-center justify-content-end">
      Total price:{" "}
      <span className="ms-2 fw-bold">{totalPrice.toFixed(3)} &#36;</span>
    </h6>
  );
};

export default TotalPrice;
