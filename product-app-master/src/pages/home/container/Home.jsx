import React from "react";
import { PageTitle } from "components";
import BagImage from "assets/images/Bag.png";
import { Products } from "../components";

const Home = () => {
  return (
    <>
      <PageTitle title="Products" imgUrl={BagImage} />
      <Products />
    </>
  );
};

export default Home;
