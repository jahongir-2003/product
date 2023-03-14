import React from "react";

const CartTableHead = () => {
  return (
    <thead className="text-white cart-table-head">
      <tr>
        <th className="pt-0 pb-0">№</th>
        <th className="p-0">IMAGE</th>
        <th className="p-0" colSpan="1">
          NAME
        </th>
        <th className="p-0">CATEGORY</th>
        <th className="p-0">PRICE</th>
        <th className="p-0">AMOUNT</th>
        <th className="p-0">TOTAL PRICE</th>
        <th className="pt-0 pb-0">REMOVE</th>
      </tr>
    </thead>
  );
};

export default CartTableHead;
