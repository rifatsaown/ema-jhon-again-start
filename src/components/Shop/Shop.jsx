import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setproducts] = useState([]);
  
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setproducts(data));
  }, []);
  
  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product {...product}></Product>
        ))}
      </div>

     <div className="cart-container">
        <Cart/>
     </div>
    </div>
  );
};

export default Shop;
