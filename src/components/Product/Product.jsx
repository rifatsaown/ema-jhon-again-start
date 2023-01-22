import React from "react";
import "./Product.css";
import { BsCartPlus } from "react-icons/bs";

export default function Product({id, name, img, seller, price, rating ,handleAddToCart}) {
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-discription">
        <p className="product-name">{name}</p>
        <p className="product-price">Price: {price}</p>
        <p>By: {seller}</p>
        <p>Rating: {rating}</p>
      </div>
      <button onClick={()=>handleAddToCart(id)} className="btn-cart">
      <BsCartPlus/> Add To Cart 
      </button>
    </div>
  );
}
