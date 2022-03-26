import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../redux/hooks';
import { getGarage, updateGarage } from '../../../services/garages';
import { useNavigate } from 'react-router-dom';
import Footer from '../footer';
import ButtonAddChanges from './buttonChanges';
import './myGarage.scss';
import * as actions from '../../../redux/user/actions-creator';

function AddPrices(): JSX.Element {
  const [garage, setGarage] = useState({
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
    _id: '',
    user: '',
    pass: '',
    garage_name: '',
    cif_nif: '',
    email: '',
    phone: '',
    web: '',
    address: '',
  });
  const user = useAppSelector((state) => state.garage);
  console.log('AKI', user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    getGarage(user.id).then((resp) => {
      console.log(resp.data);
      setGarage(resp.data);
    });
  }, []);

  const handleChange = (e: any) => {
    setGarage({
      ...garage,
      services: { ...garage.services, [e.target.name]: e.target.value },
    });
  };
  function handleSubmit(ev: any): any {
    ev.preventDefault();

    try {
      updateGarage(garage._id).then((data) => {
        dispatch(actions.updateGarage({ ...data.data, isLogged: true }));
        console.log('UPDATE', data.data);
      });
      //navigate('/login');
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div className="updateData">
        <h3>Actualizar Servicio</h3>

        <form className="listServices" onSubmit={handleSubmit}>
          <div className="group">
            <p>ruedas</p>
            <input
              type="text"
              name="ruedas"
              onChange={(e: any) => handleChange(e)}
              value={garage.services.ruedas}
            />
            <p> € </p>
          </div>
          <div className="group">
            <p>aceite</p>
            <input
              type="text"
              name="aceite"
              onChange={(e: any) => handleChange(e)}
              value={garage.services.aceite}
            />
            <p> € </p>
          </div>
          <div className="group">
            <p>filtros</p>
            <input
              type="text"
              name="filtros"
              onChange={(e: any) => handleChange(e)}
              value={garage.services.filtros}
            />
            <p> € </p>
          </div>
          <div className="group">
            <p>amortiguadores</p>
            <input
              type="text"
              name="amortiguadores"
              onChange={(e: any) => handleChange(e)}
              value={garage.services.amortiguadores}
            />
            <p> € </p>
          </div>
          <div className="group">
            <p>discos</p>
            <input
              type="text"
              name="discos"
              onChange={(e: any) => handleChange(e)}
              value={garage.services.discos}
            />
            <p> € </p>
          </div>
          <div className="group">
            <p>pastillas</p>
            <input
              type="text"
              name="pastillas"
              onChange={(e: any) => handleChange(e)}
              value={garage.services.pastillas}
            />
            <p> € </p>
          </div>
          <div className="group">
            <p>aire</p>
            <input
              type="text"
              name="aire"
              onChange={(e: any) => handleChange(e)}
              value={garage.services.aire}
            />
            <p> € </p>
          </div>
          <div className="group">
            <p>bombillas</p>
            <input
              type="text"
              name="bombillas"
              onChange={(e: any) => handleChange(e)}
              value={garage.services.bombillas}
            />
            <p> € </p>
          </div>
          <ButtonAddChanges />
        </form>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <h3>Mis Datos</h3>
          <p>You User</p>
          <label htmlFor="user">
            <input
              id="user"
              type="text"
              name="user"
              value={garage.user}
              placeholder="You User"
              onChange={handleChange}
            />
          </label>
          <p>Password</p>
          <label htmlFor="pass">
            <input
              id="pass"
              type="password"
              name="pass"
              value={garage.pass}
              placeholder="Password"
              onChange={handleChange}
            />
          </label>
          <p>Name Taller</p>
          <label htmlFor="name">
            <input
              id="name"
              type="text"
              name="name"
              value={garage.garage_name}
              placeholder="Name Taller"
              onChange={handleChange}
            />
          </label>
          <p>CIF / NIF</p>
          <label htmlFor="cif">
            <input
              id="cif"
              type="text"
              name="cif_nif"
              value={garage.cif_nif}
              placeholder="CIF / NIF"
              onChange={handleChange}
            />
          </label>
          <p>Your Email</p>
          <label htmlFor="mail">
            <input
              id="mail"
              type="email"
              name="mail"
              value={garage.email}
              onChange={handleChange}
            />
          </label>
          <p>Your phone</p>
          <label htmlFor="phone">
            <input
              id="phone"
              type="number"
              name="phone"
              value={garage.phone}
              placeholder="Your Phone"
              onChange={handleChange}
            />
          </label>
          <p>Web Page</p>
          <label htmlFor="web">
            <input
              id="web"
              type="text"
              name="web"
              value={garage.web}
              placeholder="Web Page"
              onChange={handleChange}
            />
          </label>
          <p>Address</p>
          <label htmlFor="address">
            <input
              id="address"
              type="text"
              name="address"
              value={garage.address}
              placeholder="Address"
              onChange={handleChange}
            />
          </label>
          <ButtonAddChanges />
        </form>
      </div>

      <Footer />
    </>
  );
}
export default AddPrices;
