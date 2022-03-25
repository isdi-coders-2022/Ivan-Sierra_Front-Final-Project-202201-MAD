import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { GarageI } from '../../../interfaces/garage';
import { registerGarage } from '../../../redux/user/actions-creator';

import ButtonAddChanges from './buttonChanges';

import './myGarage.scss';

function MyGarageData(): JSX.Element {
  const initialState: GarageI = {
    user: '',
    pass: '',
    garage_name: '',
    cif_nif: '',
    email: '',
    phone: '',
    web: '',
    address: '',
    services: {
      ruedas: 0,
      aceite: 0,
      filtros: 0,
      amortiguadores: 0,
      discos: 0,
      pastillas: 0,
      aire: 0,
      bombillas: 0,
    },
  };
  const [formState, setFormState] = useState(initialState);
  const dispatch = useDispatch();

  function handleChange(ev: any) {
    setFormState({ ...formState, [ev.target.name]: ev.target.value });
  }
  function handleSubmit() {
    dispatch(registerGarage(formState));
  }
  return (
    <div className="myData">
      <form onSubmit={handleSubmit}>
        <h3>Mis Datos</h3>

        <label htmlFor="user">
          <input
            id="user"
            type="text"
            name="user"
            value={formState.user}
            placeholder="You User"
            onChange={handleChange}
          />
        </label>

        <label htmlFor="pass">
          <input
            id="pass"
            type="password"
            name="pass"
            value={formState.pass}
            placeholder="Password"
            onChange={handleChange}
          />
        </label>

        <label htmlFor="name">
          <input
            id="name"
            type="text"
            name="name"
            value={formState.garage_name}
            placeholder="Name Taller"
            onChange={handleChange}
          />
        </label>

        <label htmlFor="cif">
          <input
            id="cif"
            type="text"
            name="cif"
            value={formState.cif_nif}
            placeholder="CIF / NIF"
            onChange={handleChange}
          />
        </label>

        <label htmlFor="mail">
          <input
            id="mail"
            type="email"
            name="mail"
            value={formState.email}
            placeholder="Your Email"
            onChange={handleChange}
          />
        </label>

        <label htmlFor="phone">
          <input
            id="phone"
            type="number"
            name="phone"
            value={formState.phone}
            placeholder="Your Phone"
            onChange={handleChange}
          />
        </label>

        <label htmlFor="web">
          <input
            id="web"
            type="text"
            name="web"
            value={formState.web}
            placeholder="Web Page"
            onChange={handleChange}
          />
        </label>

        <label htmlFor="address">
          <input
            id="address"
            type="text"
            name="address"
            value="register.address"
            placeholder="Address"
            onChange={handleChange}
          />
        </label>
      </form>
      <ButtonAddChanges />
    </div>
  );
}
export default MyGarageData;
