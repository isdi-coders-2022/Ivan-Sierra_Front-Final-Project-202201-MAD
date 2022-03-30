import React, { useEffect, useState } from 'react';
import './all.scss';
import '../user/login.scss';
import { CarI } from '../../interfaces/car';
import { GarageConIdI, GarageI } from '../../interfaces/garage';
import { getAllGarages } from '../../services/garages';
import Header from './header';

function Home(): JSX.Element {
  const [car, setCar] = useState<CarI>({ marca: '', modelo: '', servicio: '' });
  const [garage, setGarage] = useState<GarageConIdI[]>([]);
  const [filteredGarages, setFilteredGarages] = useState<GarageConIdI[]>([]);
  const [filteredNameGarages, setFilteredNameGarages] =
    useState<GarageConIdI>();
  const [showResults, setShowResults] = React.useState(false);
  const [showNameGarage, setShowNameGarage] = React.useState(false);
  useEffect(() => {
    getAllGarages().then((resp) => {
      console.log(resp.data);
      setGarage(resp.data);
    });
  }, []);

  function handleChange(ev: any): void {
    setCar({ ...car, [ev.target.name]: ev.target.value });
  }

  function handleFind(ev: any) {
    ev.preventDefault();

    // console.log(
    //   garage.filter((item: any) => item.services[car.servicio] !== 0)
    // );
    setFilteredGarages(
      garage.filter((item: any) => item.services[car.servicio] !== 0)
    );
    setShowResults(true);
  }
  function handleShowName(ev: any) {
    ev.preventDefault();
    setFilteredNameGarages(
      garage.find((item: any) => item._id === ev.target.dataset.id)
    );
    setShowNameGarage(true);
  }
  return (
    <>
      <Header />
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
              <option value="ruedas">Ruedas</option>
              <option value="aceite">Aceites</option>
              <option value="filtros">Filtros</option>
              <option value="amortiguadores">Amortiguadores</option>
              <option value="discos">Discos</option>
              <option value="pastillas">Pastillas</option>
              <option value="aire">Aire</option>
              <option value="bombillas">Bombillas</option>
            </select>
          </label>
          <button type="submit" onClick={handleFind}>
            Buscar
          </button>
        </form>
      </div>
      {showResults ? (
        <div className="carData">
          <div className="car">
            <div className="flex">
              <p> {car.marca} </p>
              <p> {car.modelo} </p>
            </div>
            <p className="servicio">{car.servicio}</p>
          </div>
          <div className="garages-prices">
            {filteredGarages &&
              filteredGarages.map((item) => (
                <div key={item._id} className="garages">
                  <p
                    className="buttonName"
                    data-id={item._id}
                    onClick={handleShowName}
                  >
                    {item.garage_name}
                  </p>
                  <p> {item.services[car.servicio]} €</p>
                </div>
              ))}
          </div>
        </div>
      ) : null}
      {showNameGarage ? (
        <div className="garageData">
          {filteredNameGarages && (
            <div key={filteredNameGarages._id} className="garageName">
              <p>{filteredNameGarages.garage_name}</p>
              <p>{filteredNameGarages.address}</p>
              <p>{filteredNameGarages.phone}</p>
            </div>
          )}
        </div>
      ) : null}
    </>
  );
}
export default Home;
