import React from "react";
import "./Product.css";
import { BsCartPlus } from "react-icons/bs";

export default function Product({ product, handleAddToCart }) {
  const { name, img, seller, price, rating} = product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-discription">
        <p className="product-name">{name}</p>
        <p className="product-price">Price: {price}</p>
        <p className="seller">By: {seller}</p>
        <p>Rating: {rating}</p>
      </div>
      <button onClick={()=>handleAddToCart(product)} className="btn-cart">
      <BsCartPlus/> Add To Cart 
      </button>
    </div>
  );
}
