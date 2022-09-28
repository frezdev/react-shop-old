import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import addToCartImg from '@icons/bt_add_to_cart.svg';
import '@styles/ProductItem.scss';

function ProductItem({ product }) {
  const { addToCart } = useContext(AppContext)

  const handleClick = item => {
    addToCart(item);
  }

  return (
    <div className="ProductItem">
      <img src={product.images[1]} alt={product.title} className="product-img" />
      <div className="product-info">
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={() => handleClick(product)} >
          <img src={addToCartImg} alt="Add To card" />
        </figure>
      </div>
    </div>
  );
}
export default ProductItem;