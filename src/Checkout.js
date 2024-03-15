import { Input } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./css/Checkout.css";
import commerce from "./lib/commerce";

const Checkout = ({ cart }) => {
  const [token, setToken] = useState({});
  const [countriesList, setCountriesList] = useState([]);
  const [country, setCountry] = useState(null);
  const [subDivisionList, setSubDivisionList] = useState([]);
  const [subDivision, setSubDivision] = useState(null);

  return (
    <div className="checkout_wrap">
      <h2>Shipping Details</h2>
      <br />
      <form>
        <div className="checkout__form">
          <div className="checkout__column">
            <label>First Name*</label>
            <Input required name="firstname" />
          </div>
          <div className="checkout__column">
            <label>Last Name*</label>
            <Input required name="lastname" />
          </div>
          <div className="checkout__column">
            <label>Address*</label>
            <Input required name="address" />
          </div>
          <div className="checkout__column">
            <label>Email*</label>
            <Input required name="email" />
          </div>
          <div className="checkout__column">
            <label>City*</label>
            <Input required name="city" />
          </div>
          <div className="checkout__column">
            <label>Zip-Code*</label>
            <Input required name="zipcode" />
          </div>
          <div className="checkout__column">
            <label>Shipping Country*</label>
            <select
              name="country"
              value={country}
              onChange={(e) => e.target.value}
            >
              {countriesList?.map((country) => {
                return <option value={country[0]}>{country[1]}</option>;
              })}
            </select>
          </div>
          <div className="checkout__column">
            <label>Shipping Subdivision*</label>
            <select
              name="subdivision"
              value={subDivision}
              onClick={(e) => setSubDivision(e.target.value)}
            >
              {subDivisionList?.map((subDivision) => (
                <option value={subDivision[0]}>{subDivision[1]}</option>
              ))}
            </select>
          </div>
          <div className="checkout__column">
            <label>&nbsp;</label>
            <button>Pay Now</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
