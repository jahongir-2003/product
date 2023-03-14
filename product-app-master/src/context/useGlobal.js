import { LOCAL_PRODUCTS_KEY } from "constants/common";
import React from "react";

export const useGlobal = () => {
  const initialProducts = localStorage.getItem(LOCAL_PRODUCTS_KEY);
  const [carts, setCarts] = React.useState(
    initialProducts ? JSON.parse(initialProducts) : []
  );
  return {
    states: { carts },
    actions: { setCarts },
  };
};
