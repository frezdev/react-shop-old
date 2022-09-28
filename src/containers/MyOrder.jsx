import React, { useContext } from 'react';
import OrderItem from '@components/OrderItem';
import arrow from '@icons/flechita.svg';
import AppContext from '@context/AppContext';
import '@styles/MyOrder.scss';

function MyOrder() {
  const { state } = useContext(AppContext);

  const sumTotal = () => {
    return state.cart.reduce((accum, current) => (
      accum + current.price
    ), 0);
  }
  return (
    <aside className="MyOrder">
      <div className="title-container">
        <img src={arrow} alt="arrow" />
        <p className="title">My Order</p>
      </div>
      <div className="">
        <div className='MyOrder-content'>
          {state.cart.map(product => (
            <OrderItem key={`orderItem-${product.id}`} product={product} />
          ))}
        </div>
        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>${sumTotal()}</p>
        </div>
        <button className="primary-button">
          Checkout
        </button>
      </div>
    </aside>
  );
}
export default MyOrder;