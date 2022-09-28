import React from 'react';
import '@styles/CreateAccount.scss';

function CreateAccount() {
  return (
    <div className="CreateAccount">
      <div className="CreateAccount-container">
        <h1 className="title">My account</h1>
        <form action="/" className="form">
          <div>
            <label htmlFor="name" className="label">Name</label>
            <input type="text" id="name" className="input input-name" placeholder="Carlos" />
            <label htmlFor="email" className="label">Email</label>
            <input type="email" id="email" className="input input-email" placeholder="carlos@gmail.com" />
            <label htmlFor="new-password" className="label">Password</label>
            <input type="password" id="new-password" className="input input-password" placeholder="**********" />
          </div>
          <input className="primary-button login-button" type="submit" defaultValue="Create" />
        </form>
      </div>
    </div>
  );
}
export default CreateAccount;