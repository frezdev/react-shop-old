import React from 'react';
import icon from '@icons/bt_add_to_cart.svg';
import '@styles/ProductInfo.scss';

function ProductInfo() {
  return (
    <>
      <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?cs=srgb&dl=pexels-pixabay-276517.jpg&fm=jpg" alt="Bike" />
      <div className="productInfo">
        <p>$ 35,00</p>
        <p>Bike</p>
        <p>With its practical position, this bike also fulfills a decorative function, add your hall or workspace.</p>
        <button className="primary-button add-to-cart-button">
          <img src={icon} alt="add to cart" />
          Add to cart
        </button>
      </div>
    </>
  )
}
export default ProductInfo;