import React, { useContext } from 'react';
import iconClose from '@icons/icon_close.png';
import AppContext from '@context/AppContext';
import '@styles/OrderItem.scss';

function OrderItem({ product }) {
  const { removeFromCart } = useContext(AppContext);

  return (
    <div className="OrderItem">
      <figure>
        <img src={product.images[1]} alt={product.title} />
      </figure>
      <p>{product.title}</p>
      <p>${product.price}</p>
      <img className='OrderItem-btn-delete' onClick={() => removeFromCart(product)} src={iconClose} alt="close" />
    </div>
  );
}
export default OrderItem;