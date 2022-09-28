import React from 'react';
import '@styles/ShoppingCartItem.scss';

function ShoppingCartItem() {
  return (
    <div className="ShoppingCartItem">
      <figure>
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?cs=srgb&dl=pexels-pixabay-276517.jpg&fm=jpg" alt="bike" />
      </figure>
      <p>Bike</p>
      <p>$30,00</p>
    </div>
  );
}
export default ShoppingCartItem;