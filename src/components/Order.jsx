import React from 'react';
import arrow from '@icons/flechita.svg';
import '@styles/Order.scss';

function Order() {
  return (
    <div className="Order">
      <p>
        <span>10.31.21</span>
        <span>6 articles</span>
      </p>
      <p>$560,00</p>
      <img src={arrow} alt="arrow" />
    </div>
  );
}
export default Order;