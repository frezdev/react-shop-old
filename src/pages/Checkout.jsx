import React from 'react';
import OrderItem from '@components/OrderItem';
import '@styles/Checkout.scss'

function Checkout() {
  return (
    <div className="Checkout">
      <div className="Checkout-container">
        <h1 className="title">My order</h1>
        <div className="Checkout-content">
          <OrderItem />
          <OrderItem />
          <OrderItem />
          <OrderItem />
        </div>
      </div>
    </div>
  );
}
export default Checkout;