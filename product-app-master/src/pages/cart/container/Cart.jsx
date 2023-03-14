import React from "react";
import BasketAlternative from "assets/images/BasketAlternative.png";
import { PageTitle } from "components";
import { CartTable } from "../components";

const Cart = () => {
  return (
    <section className="container pb-2">
      <PageTitle
        title="My Basket"
        imgUrl={BasketAlternative}
        textClassName="text-warning"
      />
      <CartTable />
    </section>
  );
};

export default Cart;
