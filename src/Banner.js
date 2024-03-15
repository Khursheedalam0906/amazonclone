import React from "react";
import HeadPhone from "./assets/headphone.jpg";
import Product from "./Product";

const Banner = ({ productList, addToCart }) => {
  //console.log("banner", productList);
  return (
    <div>
      <div className="banner">
        <img src={HeadPhone} className="banner" />
      </div>
      <Product productList={productList} addToCart={addToCart} />
    </div>
  );
};

export default Banner;
