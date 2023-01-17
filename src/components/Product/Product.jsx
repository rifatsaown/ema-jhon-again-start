import React from "react";
import "./Product.css";

export default function Product({ name, img, seller, price, rating }) {
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-discription">
      <p className="product-name">{name}</p>
      <p className="product-price">Price: {price}</p>
      <p>By: {seller}</p>
      </div>
    </div>
  );
}
