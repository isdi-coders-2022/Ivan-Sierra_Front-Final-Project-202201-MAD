import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { GarageRegisterI } from '../../../interfaces/garageRegister';
import { registerGarage } from '../../../redux/user/actions-creator';

import ButtonAddChanges from './buttonChanges';

import './myGarage.scss';

function TallerForm(): JSX.Element {
  const initialState: GarageRegisterI = {
    user: '',
    pass: '',
    garage_name: '',
    cif_nif: '',
    email: '',
    phone: '',
    web: '',
    address: '',
  };
  const [formState, setFormState] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleChange(ev: any) {
    setFormState({ ...formState, [ev.target.name]: ev.target.value });
  }
  function handleSubmit() {
    console.log('REGISTRO', formState);
    dispatch(registerGarage(formState));
    navigate('/login');
  }
  return (
    <div className="myData">
      <form onSubmit={handleSubmit}>
        <h3>Añadir Taller</h3>
        <p>You User</p>
        <label htmlFor="user">
          <input
            id="user"
            type="text"
            name="user"
            value={formState.user}
            onChange={handleChange}
          />
        </label>
        <p>Password</p>
        <label htmlFor="pass">
          <input
            id="pass"
            type="password"
            name="pass"
            value={formState.pass}
            onChange={handleChange}
          />
        </label>
        <p>Name Taller</p>
        <label htmlFor="garage_name">
          <input
            id="garage_name"
            type="text"
            name="garage_name"
            value={formState.garage_name}
            onChange={handleChange}
          />
        </label>
        <p>CIF / NIF</p>
        <label htmlFor="cif_nif">
          <input
            id="cif_nif"
            type="text"
            name="cif_nif"
            value={formState.cif_nif}
            onChange={handleChange}
          />
        </label>
        <p>Your Email</p>
        <label htmlFor="email">
          <input
            id="email"
            type="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
          />
        </label>
        <p>Your phone</p>
        <label htmlFor="phone">
          <input
            id="phone"
            type="number"
            name="phone"
            value={formState.phone}
            onChange={handleChange}
          />
        </label>
        <p>Web Page</p>
        <label htmlFor="web">
          <input
            id="web"
            type="text"
            name="web"
            value={formState.web}
            onChange={handleChange}
          />
        </label>
        <p>Address</p>
        <label htmlFor="address">
          <input
            id="address"
            type="text"
            name="address"
            value={formState.address}
            onChange={handleChange}
          />
        </label>
        <ButtonAddChanges />
      </form>
    </div>
  );
}
export default TallerForm;
