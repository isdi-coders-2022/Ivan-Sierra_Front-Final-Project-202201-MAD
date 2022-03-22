import React from 'react';
import './login.scss';

function TallerForm(): JSX.Element {
  return (
    <form>
      <h3>Add Taller</h3>
      <p>You User</p>
      <label htmlFor="user">
        <input id="user" type="text" name="user" value="register.user" />
      </label>
      <p>Password</p>
      <label htmlFor="pass">
        <input id="pass" type="password" name="pass" value="register.pass" />
      </label>
      <p>Name Taller</p>
      <label htmlFor="name">
        <input id="name" type="text" name="name" value="register.name" />
      </label>
      <p>CIF / NIF</p>
      <label htmlFor="cif">
        <input id="cif" type="text" name="cif" value="register.cif" />
      </label>
      <p>Your Email</p>
      <label htmlFor="mail">
        <input id="mail" type="email" name="mail" value="register.mail" />
      </label>
      <p>Your phone</p>
      <label htmlFor="phone">
        <input id="phone" type="number" name="phone" value="register.phone" />
      </label>
      <p>Web Page</p>
      <label htmlFor="web">
        <input id="web" type="text" name="web" value="register.web" />
      </label>
      <p>Address</p>
      <label htmlFor="address">
        <input
          id="address"
          type="text"
          name="address"
          value="register.address"
        />
      </label>

      <button type="submit">Register Taller</button>
    </form>
  );
}
export default TallerForm;
