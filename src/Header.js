import React from "react";
import "./css/Header.css";
import AmazonIcon from "./assets/amazon.png";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PrimeVideoIcon from "./assets/primevideo.png";
import { Link } from "react-router-dom";

const Header = ({ cart, categoryList }) => {
  return (
    <>
      <div className="header">
        <Link to="/">
          <img src={AmazonIcon} className="header__logo" />
        </Link>
        <div className="header__search">
          <input type="search" />
          <SearchIcon className="header__searchIcon" />
        </div>
        <div className="header__nav">
          <div className="header__option">
            <span className="header__optionone">Hello Mahabeer</span>
            <span className="header__optiontwo">Sign In</span>
          </div>
          <div className="header__option">
            <span className="header__optionone">Return</span>
            <span className="header__optiontwo">& Orders</span>
          </div>
          <div className="header__option">
            <span className="header__optionone">Your</span>
            <span className="header__optiontwo">Prime</span>
          </div>
          <div className="header__optionBasket">
            <Link to="/cart">
              <ShoppingCartIcon />
              <span>{cart.total_items}</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="header__bottom">
        <ul>
          {categoryList?.map((category) => (
            <li key={category.id}>
              <Link to={`/category/${category.slug}`}>{category.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Header;
