import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Banner from "./Banner";
import Cart from "./Cart";
import commerce from "./lib/commerce";
import { useEffect, useState } from "react";
import Product from "./Product";
import Checkout from "./Checkout";
import Thankyou from "./Thankyou";

function App() {
  const [productList, setProductList] = useState([]);
  const [cart, setCart] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [productListByCategory, setProductListByCategory] = useState([]);

  const fetchProducts = async () => {
    const response = await commerce.products.list();
    //  console.log("first", response);
    setProductList(response.data);
  };

  const fetchProductListByCategory = async (category) => {
    const response = await commerce.products.list({
      category_slug: [category],
    });
    console.log("Category", response);
    setProductListByCategory(response.data);
  };

  const addToCart = async (prodId, qty) => {
    const response = await commerce.cart.add(prodId, qty);
    //  console.log(response);
    setCart(response);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const removeFromCart = async (prodId) => {
    const response = await commerce.cart.remove(prodId);
    setCart(response);
  };

  const fetchCategories = async () => {
    const response = await commerce.categories.list();
    setCategoryList(response.data);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
    fetchCategories();
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Header cart={cart} categoryList={categoryList} />
        <Routes>
          <Route
            exact
            path="/"
            element={<Banner productList={productList} addToCart={addToCart} />}
          />
          <Route
            exact
            path="/cart"
            element={<Cart cart={cart} removeFromCart={removeFromCart} />}
          />
          <Route
            exact
            path="/category/:slug"
            element={
              <Product
                productList={productListByCategory}
                fetchProductListByCategory={fetchProductListByCategory}
                addToCart={addToCart}
                categorydata
              />
            }
          />
          <Route exact path="/checkout" element={<Checkout cart={cart} />} />
          <Route exact path="/thankyou" element={<Thankyou />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
