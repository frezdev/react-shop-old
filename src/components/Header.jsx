import React, { useState, useContext } from 'react';
import Menu from '@components/Menu';
import logo from '@logos/logo_yard_sale.svg';
import iconShoppingCart from '@icons/icon_shopping_cart.svg';
import iconMenu from '@icons/icon_menu.svg';
import AppContext from '@context/AppContext';
import MyOrder from '@containers/MyOrder';
import '@styles/Header.scss';

const initialState = {
  toggleMenu: false,
  toggleOrders: false
}
function Header() {
  const [toggle, setToggle] = useState(initialState);

  const { state } = useContext(AppContext);

  const handleToggleMenu = () => {
    setToggle({
      toggleOrders: false,
      toggleMenu: !toggle.toggleMenu
    });
  }

  const handleToggleOrders = () => {
    setToggle({
        toggleMenu: false,
        toggleOrders: !toggle.toggleOrders
    });
  }

  return (
    <nav>
      <div className="menu">
        <figure>
          <img src={iconMenu} alt="menu" className="menu-img" />
        </figure>
      </div>
      <div className="navbar-left">
        <img src={logo} alt="logo" className="nav-logo" />
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={handleToggleMenu}>
            carlos@example.com
          </li>
          <li className="navbar-shopping-cart" onClick={handleToggleOrders}>
            <img src={iconShoppingCart} alt="shopping cart" />
            {state.cart.length > 0 && (
              <div>{state.cart.length}</div>
            )}
          </li>
        </ul>
      </div>
      {toggle.toggleMenu && <Menu />}
      {toggle.toggleOrders && <MyOrder />}
    </nav>
  );
}
export default Header;