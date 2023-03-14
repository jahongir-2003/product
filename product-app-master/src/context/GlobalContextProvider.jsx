import React from "react";
import GlobalContext from "./GlobalContext";
import { useGlobal } from "./useGlobal";

const GlobalContextProvider = ({ children }) => {
  const value = useGlobal();
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
