import React from 'react';
import logo from '@logos/logo_yard_sale.svg';
import '@styles/NewPassword.scss';

function NewPassword() {
  return (
    <div className="NewPassword">
      <div className="NewPassword-container">
        <img src={logo} alt="logo" className="logo" />
        <h1 className="title">Create a new password</h1>
        <p className="subtitle">Enter a new password for your account</p>
        <form action="/" className="form">
          <label htmlFor="password" className="label">Password</label>
          <input type="password" id="password" className="input input-password" placeholder="**********" />
          <label htmlFor="new-password" className="label">Password</label>
          <input type="password" id="new-password" className="input input-password" placeholder="**********" />
          <input className="primary-button login-button" type="submit" defaultValue="Confirm" />
        </form>
      </div>
    </div>
  );
}
export default NewPassword;