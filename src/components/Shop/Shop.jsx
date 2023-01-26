import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import { addToDb } from "../utilities/fakedb";
import "./Shop.css";

const Shop = () => {
  const [products, setproducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setproducts(data));
  }, []);

  const handleAddToCart = (produts) => {
    setCart([...cart, produts]);
    addToDb(produts.id);
  };

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product,index) => (
          <Product key={index} product={product} handleAddToCart={handleAddToCart}></Product>
        ))}
      </div>

      <div className="cart-container">
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default Shop;
