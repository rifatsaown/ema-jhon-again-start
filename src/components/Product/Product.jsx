import React from "react";
import "./Product.css";

export default function Product({ name, img, seller, price, rating }) {
  return (
    <div className="product">
      <img src={img} alt="" />
      <h2>{name}</h2>
      <p>Price: {price}</p>
      <p>By: {seller}</p>
    </div>
  );
}
