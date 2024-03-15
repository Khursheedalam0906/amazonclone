import React, { useEffect } from "react";
import "./css/Product.css";
import { useParams } from "react-router-dom";

const Product = ({
  productList,
  addToCart,
  categorydata,
  fetchProductListByCategory,
}) => {
  //  console.log("hello", productList);
  let { slug } = useParams();
  //  console.log("Slug", slug);

  useEffect(() => {
    if (slug) {
      fetchProductListByCategory(slug);
    }
  }, [slug]);

  return (
    <div>
      {categorydata && <div style={{ marginTop: 300 }}></div>}
      <div className="product_wrap">
        {productList?.map((items) => (
          <div className="product" key={items?.id}>
            <img src={items?.image?.url} />
            <h3>{items?.name}</h3>
            <p>{items?.price?.formatted_with_symbol}</p>
            <button onClick={() => addToCart(items?.id, 1)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
