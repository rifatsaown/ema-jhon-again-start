import React from 'react'
import './Cart.css'

export default function Cart({cart}) {


 /*-------------reduce method----------------  
  const total = cart.reduce((total, previousTotal) => total + previousTotal.price, 0);
  const shipping = cart.reduce((shipping, previousShipping) => shipping + previousShipping.shipping, 0); 
  --------------------------------------*/
// for of mathood
  let total = 0;
  let shipping = 0;
  for (const product of cart) {
    total += product.price;
    shipping += product.shipping;
  }

  const tax = parseInt((total * 0.1).toFixed(2));
  const grandTotal = total + shipping + tax;

  return (
    <div className='cart'>
        <h1>Order Summary</h1>
        <h3>Items Ordered: {cart.length}</h3>
        <p>Total Price : {total}</p>
        <p>Total Shipping :{shipping} </p>
        <p>Tax : {tax}</p>
        <h4>Grand Total : {grandTotal}</h4>
    </div>
  )
}
