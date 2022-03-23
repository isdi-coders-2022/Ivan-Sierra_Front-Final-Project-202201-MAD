import React from 'react';

import ButtonAddChanges from './buttonChanges';

import './myGarage.scss';

function MyGarageData(): JSX.Element {
  return (
    <div className="myData">
      <form>
        <h3>Mis Datos</h3>

        <label htmlFor="user">
          <input
            id="user"
            type="text"
            name="user"
            value="register.user"
            placeholder="You User"
          />
        </label>

        <label htmlFor="pass">
          <input
            id="pass"
            type="password"
            name="pass"
            value="register.pass"
            placeholder="Password"
          />
        </label>

        <label htmlFor="name">
          <input
            id="name"
            type="text"
            name="name"
            value="register.name"
            placeholder="Name Taller"
          />
        </label>

        <label htmlFor="cif">
          <input
            id="cif"
            type="text"
            name="cif"
            value="register.cif"
            placeholder="CIF / NIF"
          />
        </label>

        <label htmlFor="mail">
          <input
            id="mail"
            type="email"
            name="mail"
            value="register.mail"
            placeholder="Your Email"
          />
        </label>

        <label htmlFor="phone">
          <input
            id="phone"
            type="number"
            name="phone"
            value="register.phone"
            placeholder="Your Phone"
          />
        </label>

        <label htmlFor="web">
          <input
            id="web"
            type="text"
            name="web"
            value="register.web"
            placeholder="Web Page"
          />
        </label>

        <label htmlFor="address">
          <input
            id="address"
            type="text"
            name="address"
            value="register.address"
            placeholder="Address"
          />
        </label>
      </form>
      <ButtonAddChanges />
    </div>
  );
}
export default MyGarageData;
