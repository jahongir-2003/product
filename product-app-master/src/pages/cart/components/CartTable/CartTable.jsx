import React from "react";
import "./CartTable.css";
import CartTableHead from "../CartTableHead/CartTableHead";
import CartTableBody from "../CartTableBody/CartTableBody";
import TotalPrice from "../TotalPrice/TotalPrice";
import { GlobalContext } from "context";

const CartTable = () => {
  const {
    states: { carts },
    actions: {},
  } = React.useContext(GlobalContext);

  if (carts.length === 0)
    return (
      <h3 className="text-center my-5">
        There are no products in the cart !!!
      </h3>
    );

  return (
    <>
      <div className="table-responsive">
        <table className="cart-table table table-bordered text-center">
          <CartTableHead />
          <CartTableBody />
        </table>
      </div>
      <TotalPrice />
    </>
  );
};

export default CartTable;
