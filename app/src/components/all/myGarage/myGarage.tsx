import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../redux/hooks';
import {
  deleteGarage,
  getGarage,
  updateGarage,
} from '../../../services/garages';
import { useNavigate } from 'react-router-dom';

import './myGarage.scss';
import * as actions from '../../../redux/user/actions-creator';
import HeaderLogged from '../headerLogged';

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

  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    getGarage(user.id).then((resp) => {
      setGarage(resp.data);
    });
  }, [user.id]);// o vacio

  const handleChange = (e: any) => {
    setGarage({
      ...garage,
      [e.target.name]: e.target.value,
      services: { ...garage.services, [e.target.name]: e.target.value },
    });
  };
  function handleSubmit(ev: any): any {
    ev.preventDefault();

    try {
      updateGarage(garage._id, garage).then((data) => {
        dispatch(actions.updateGarage({ ...data.data, isLogged: true }));
      });
    } catch (error) {
      console.log(error);
    }
  }

  function handleDelete(ev: any): any {
    ev.preventDefault();
    try {
      deleteGarage(garage._id).then((data) => {
        dispatch(actions.deleteGarage({ ...data.data, isLogged: false }));

        navigate('/');
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <HeaderLogged />
      <div className="updateData">
        <h3>Actualizar Servicio</h3>

        <form className="listServices" onSubmit={handleSubmit}>
          <div className="group">
            <div className="nameService">
              <p>ruedas</p>
            </div>
            <div className="prices">
              <input
                type="text"
                name="ruedas"
                onChange={(e: any) => handleChange(e)}
                value={garage.services.ruedas}
              />
              <p> € </p>
            </div>
          </div>
          <div className="group">
            <div className="nameService">
              <p>aceite</p>
            </div>
            <div className="prices">
              <input
                type="text"
                name="aceite"
                onChange={(e: any) => handleChange(e)}
                value={garage.services.aceite}
              />
              <p> € </p>
            </div>
          </div>
          <div className="group">
            <div className="nameService">
              <p>filtros</p>
            </div>
            <div className="prices">
              <input
                type="text"
                name="filtros"
                onChange={(e: any) => handleChange(e)}
                value={garage.services.filtros}
              />
              <p> € </p>
            </div>
          </div>
          <div className="group">
            <div className="nameService">
              <p>amortiguadores</p>
            </div>
            <div className="prices">
              <input
                type="text"
                name="amortiguadores"
                onChange={(e: any) => handleChange(e)}
                value={garage.services.amortiguadores}
              />
              <p> € </p>
            </div>
          </div>
          <div className="group">
            <div className="nameService">
              <p>discos</p>
            </div>
            <div className="prices">
              <input
                type="text"
                name="discos"
                onChange={(e: any) => handleChange(e)}
                value={garage.services.discos}
              />
              <p> € </p>
            </div>
          </div>
          <div className="group">
            <div className="nameService">
              <p>pastillas</p>
            </div>
            <div className="prices">
              <input
                type="text"
                name="pastillas"
                onChange={(e: any) => handleChange(e)}
                value={garage.services.pastillas}
              />
              <p> € </p>
            </div>
          </div>
          <div className="group">
            <div className="nameService">
              <p>aire</p>
            </div>
            <div className="prices">
              <input
                type="text"
                name="aire"
                onChange={(e: any) => handleChange(e)}
                value={garage.services.aire}
              />
              <p> € </p>
            </div>
          </div>
          <div className="group">
            <div className="nameService">
              <p>bombillas</p>
            </div>
            <div className="prices">
              <input
                type="text"
                name="bombillas"
                onChange={(e: any) => handleChange(e)}
                value={garage.services.bombillas}
              />
              <p> € </p>
            </div>
          </div>
          <div className="center buttonMyGarage">
            <button
              className="sendChanges"
              type="submit"
              onClick={handleSubmit}
            >
              Guardar Cambios
            </button>
          </div>
        </form>
      </div>
      <div className="formPersonal">
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
              onChange={(e: any) => handleChange(e)}
            />
          </label>
          <p>Name Taller</p>
          <label htmlFor="name">
            <input
              id="name"
              type="text"
              name="garage_name"
              value={garage.garage_name}
              placeholder="Name Taller"
              onChange={(e: any) => handleChange(e)}
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
              onChange={(e: any) => handleChange(e)}
            />
          </label>
          <p>Your Email</p>
          <label htmlFor="mail">
            <input
              id="mail"
              type="email"
              name="email"
              value={garage.email}
              onChange={(e: any) => handleChange(e)}
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
              onChange={(e: any) => handleChange(e)}
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
              onChange={(e: any) => handleChange(e)}
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
              onChange={(e: any) => handleChange(e)}
            />
          </label>
          <div className="center">
            <button className="sendChanges" type="submit">
              Guardar Cambios
            </button>
          </div>
        </form>
        <div className="center">
          <button className="borrar" type="submit" onClick={handleDelete}>
            Borrar Taller
          </button>
        </div>
      </div>
    </>
  );
}
export default AddPrices;
