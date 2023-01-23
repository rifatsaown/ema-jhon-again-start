import React from 'react'
import './Cart.css'

export default function Cart({cart}) {
  console.log(cart);
  
  return (
    <div className='cart'>
        <h1>Order Summary</h1>
        <h3>Items Ordered: {cart.length}</h3>
        <p>Total Price : </p>
        <p>Total Shipping : </p>
        <p>Tax :</p>
        <h4>Grand Total :</h4>
    </div>
  )
}
