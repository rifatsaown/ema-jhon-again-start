import React, { useEffect, useState } from "react";
import "./Shop.css";

const Shop = () => {
  const [product, setproduct] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setproduct(data));
  }, []);
  return (
    <div className="shop-container">
      <div className="products-container">
        <h3>This is shop</h3>
        <h2>Product Loaded : {product.length}</h2>
      </div>
      <div className="cart-container">
        <h4>Order Summary</h4>
      </div>
    </div>
  );
};

export default Shop;
