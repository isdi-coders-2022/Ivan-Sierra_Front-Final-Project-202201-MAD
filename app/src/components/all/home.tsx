import React from 'react';
import './all.scss';
import '../user/login.scss';

function Home(): JSX.Element {
  return (
    <>
      <div>
        <form>
          <h3>Encuentra el mejor precio</h3>
          <p>Matrícula</p>
          <label htmlFor="matricula">
            <input
              id="matricula"
              type="text"
              name="matricula"
              value="buscador.matricula"
            />
          </label>
          <p>Marca</p>
          <label htmlFor="marcq">
            <input id="marca" type="text" name="marca" value="buscador.marca" />
          </label>
          <p>Modelo</p>
          <label htmlFor="modelo">
            <input
              id="modelo"
              type="text"
              name="modelo"
              value="buscador.modelo"
            />
          </label>
        </form>
      </div>
      <div className="rojo">
        <h3>Selecciona Servicio</h3>
        <div className="caja">
          <select>
            <option>ruedas</option>
            <option>aceites</option>
            <option>filtros</option>
            <option>amortiguadores</option>
            <option>discos</option>
            <option>pastillas</option>
            <option>aire</option>
            <option>bombillas</option>
          </select>
        </div>
      </div>
      <div className="carData">
        <div className="flex">
          <p> MARCA </p>
          <p> MODELO </p>
        </div>
        <p className="servicio">Servicio seleccionado</p>
        <div className="garages-prices">
          <div className="garages">
            <p>NOMBRE TALLER</p>
            <p>NOMBRE TALLER</p>
            <p>NOMBRE TALLER</p>
          </div>
          <div className="prices">
            <p>50€</p>
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
