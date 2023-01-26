import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import { addToDb, getStoredCart } from "../utilities/fakedb";
import "./Shop.css";

const Shop = () => {
  const [products, setproducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setproducts(data));
  }, []);
  useEffect(() => {
    const savedCart = getStoredCart();
    const savedProducts = [];
    for(const id in savedCart){
      const addedProducts = products.find(product => product.id === id);
      if (addedProducts) {
        const quantity = savedCart[id];
        addedProducts.quantity = quantity;
        savedProducts.push(addedProducts);
      }
    }
    setCart(savedProducts);
  }, [products])

  const handleAddToCart = (selectedProducts) => {
    const exists = cart.find((product) => product.id === selectedProducts.id);
    let newCart = [];
    if (!exists) {
      selectedProducts.quantity = 1;
      newCart = [...cart, selectedProducts];
    }
    else{
      const rest = cart.filter(product => product.id !== selectedProducts.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }
    setCart(newCart);
    addToDb(selectedProducts.id);
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
