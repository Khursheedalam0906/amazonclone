import React from "react";
import "./css/Cart.css";
import { useNavigate } from "react-router-dom";

const Cart = ({ cart, removeFromCart }) => {
  const navigate = useNavigate();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/LA/LATV/1071374_750x200_7._V515060851_.jpg"
          className="checkout__ad"
        />
        <div>
          <h3>Hello Mahabeer</h3>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {cart?.line_items?.map((item) => (
            <div className="checkoutProduct" key={item?.id}>
              <img src={item?.image?.url} className="checkoutProduct__img" />
              <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{item?.name}</p>
                <p className="checkoutProduct__price">
                  <strong>
                    {item?.price?.formatted_with_symbol}*{item?.quantity} =
                    {cart?.currency.symbol}
                    {item?.price.raw * item?.quantity}
                  </strong>
                </p>
                <button onClick={() => removeFromCart(item?.id)}>
                  Remove from Basket
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <div className="subtotal">
          <p>
            Subtotal ({cart?.total_items} items):
            <strong>{cart?.subtotal?.formatted_with_symbol}</strong>
          </p>
          <small className="subtotal__gift">
            <input type="checkbox" />
            This order contain a gift
          </small>
        </div>
        <button onClick={() => navigate("/checkout")}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
