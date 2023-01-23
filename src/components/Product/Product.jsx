import React from "react";
import { BsCartPlus, BsStar } from "react-icons/bs";
import "./Product.css";

export default function Product({ product, handleAddToCart }) {
  const { name, img, seller, price, ratings } = product;
  let starts = [];
  for (let i = 0; i < ratings; i++) {
    starts.push(<BsStar />);
  }
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-discription">
        <p className="product-name">{name}</p>
        <p className="product-price">Price: {price}</p>
        <p className="seller">By: {seller}</p>
        <p>
          Rating: &nbsp;
          <span>{starts}</span>
        </p>
      </div>
      <button onClick={() => handleAddToCart(product)} className="btn-cart">
        <BsCartPlus /> Add To Cart
      </button>
    </div>
  );
}
