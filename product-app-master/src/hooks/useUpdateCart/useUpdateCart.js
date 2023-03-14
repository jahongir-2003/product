import { CART_ACTIONS_STATUS, LOCAL_PRODUCTS_KEY } from "constants/common";
import { GlobalContext } from "context";
import React from "react";
import { toast } from "react-toastify";

export const useUpdateCart = () => {
  const {
    states: {},
    actions: { setCarts },
  } = React.useContext(GlobalContext);

  const updateCartFn = (newProduct, optional) => {
    localStorage.setItem(LOCAL_PRODUCTS_KEY, JSON.stringify([...newProduct]));
    setCarts([...newProduct]);
    if (optional?.status === CART_ACTIONS_STATUS.add) {
      toast.success(`${optional.title} added to cart !!!`);
    }
    if (optional?.status === CART_ACTIONS_STATUS.remove) {
      toast.error(`${optional.title} removed from cart !!!`);
    }
  };
  return [updateCartFn];
};
