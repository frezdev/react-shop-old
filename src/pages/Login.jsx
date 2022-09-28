import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '@logos/logo_yard_sale.svg';
import '@styles/Login.scss';

function Login() {
  const form = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const data = Object.fromEntries(formData);
    // const data = {
    //   'username': formData.get('email'),
    //   'password': formData.get('password'),
    // }
    console.log(data);
  }

  return (
    <div className="Login">
      <div className="Login-container">
        <img src={logo} alt="logo" className="logo" />
        <form action="/" className="form" ref={form}>
          <label htmlFor="email" className="label">Email address</label>
          <input type="email" name="email" className="input input-email" placeholder="example@gmail.com" />
          <label htmlFor="password" className="label">Password</label>
          <input type="password" name="password" className="input input-password" placeholder="**********" />
          <button
            className="primary-button login-button"
            onClick={handleSubmit}>
            Log in
          </button>
          <Link to="/password-recovery">Forgot my password</Link>
        </form>
        <button
          className="secondary-button signup-button">
          Sign up
        </button>
      </div>
    </div>
  );
}
export default Login;