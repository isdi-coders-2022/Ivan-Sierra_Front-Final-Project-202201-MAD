import React, { useEffect, useState } from 'react';
import './all.scss';
import '../user/login.scss';
import { CarI } from '../../interfaces/car';
import { GarageI } from '../../interfaces/garage';
import { getAllGarages } from '../../services/garages';

function Home(): JSX.Element {
  const [car, setCar] = useState<CarI>({ marca: '', modelo: '', servicio: '' });
  const [garage, setGarage] = useState<GarageI>({
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

    user: '',
    pass: '',
    garage_name: '',
    cif_nif: '',
    email: '',
    phone: '',
    web: '',
    address: '',
  });

  useEffect(() => {
    getAllGarages(garage).then((resp) => {
      console.log(resp.data);
      setGarage(resp.data);
    });
  }, []);

  function handleChange(ev: any): void {
    setCar({ ...car, [ev.target.name]: ev.target.value });
  }

  function handleFind() {
    console.log(setGarage);
    console.log(setGarage(garage));
  }
  return (
    <>
      <div>
        <form onSubmit={handleFind}>
          <h3>Encuentra el mejor precio</h3>
          <p>Matrícula</p>
          <label htmlFor="matricula">
            <input
              id="matricula"
              type="text"
              name="matricula"
              onChange={handleChange}
              //value={car.matricula}
            />
          </label>
          <p>Marca</p>
          <label htmlFor="marca">
            <input
              id="marca"
              type="text"
              name="marca"
              onChange={handleChange}
              value={car.marca}
            />
          </label>
          <p>Modelo</p>
          <label htmlFor="modelo">
            <input
              id="modelo"
              type="text"
              name="modelo"
              onChange={handleChange}
              value={car.modelo}
            />
          </label>

          <p>Servicios</p>
          <label htmlFor="servicio">
            <select
              id="servicio"
              name="servicio"
              value={car.servicio}
              onChange={handleChange}
            >
              <option>ruedas</option>
              <option>aceites</option>
              <option>filtros</option>
              <option>amortiguadores</option>
              <option>discos</option>
              <option>pastillas</option>
              <option>aire</option>
              <option>bombillas</option>
            </select>
          </label>
          <button type="submit">Buscar</button>
        </form>
      </div>

      <div className="carData">
        <div className="flex">
          <p> {car.marca} </p>
          <p> {car.modelo} </p>
        </div>
        <p className="servicio">{car.servicio}</p>
        <div className="garages-prices">
          <div className="garages">
            <p>NOMBRE TALLER</p>
            <p>NOMBRE TALLER</p>
            <p>NOMBRE TALLER</p>
          </div>
          <div className="prices">
            <p></p>
            <p>50€</p>
            <p>50€</p>
          </div>
        </div>
      </div>
      <div className="garageData">
        <p>NOMBRE TALLER</p>
        <p>DIRECCION</p>
        <p>TELEFONO</p>
      </div>
    </>
  );
}
export default Home;
