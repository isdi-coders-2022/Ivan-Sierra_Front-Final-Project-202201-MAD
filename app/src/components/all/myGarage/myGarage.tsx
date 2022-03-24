import React, { useEffect, useState } from 'react';
import Footer from '../footer';
import ButtonAddChanges from './buttonChanges';
import './myGarage.scss';
import MyGarageData from './myGarageDates';

function AddPrices(): JSX.Element {
  const [garage, setGarage] = useState({});
/*
  useEffect(() => {
    getAllGarages().then((data: any) => {
      setGarage(data.data);
    });
  }, []);
*/
  return (
    <>
      <div className="addNew">
        <h3>Agregar Servicio</h3>

        <div className="listServices">
          <div className="group">
            <p>ruedas</p>
            <input type="number" />
            <p> € </p>
            <p className="trash"> 🗑 </p>
          </div>
          <div className="group">
            <p>aceite</p>
            <input type="number" />
            <p> € </p>
            <p className="trash"> 🗑 </p>
          </div>
          <div className="group">
            <p>filtros</p>
            <input type="number" />
            <p> € </p>
            <p className="trash"> 🗑 </p>
          </div>
          <div className="group">
            <p>amortiguadores</p>
            <input type="number" />
            <p> € </p>
            <p className="trash"> 🗑 </p>
          </div>
          <div className="group">
            <p>discos</p>
            <input type="number" />
            <p> € </p>
            <p className="trash"> 🗑 </p>
          </div>
          <div className="group">
            <p>pastillas</p>
            <input type="number" />
            <p> € </p>
            <p className="trash"> 🗑 </p>
          </div>
          <div className="group">
            <p>aire</p>
            <input type="number" />
            <p> € </p>
            <p className="trash"> 🗑 </p>
          </div>
          <div className="group">
            <p>bombillas</p>
            <input type="number" />
            <p> € </p>
            <p className="trash"> 🗑 </p>
          </div>
        </div>
        <ButtonAddChanges />
      </div>
      <MyGarageData />
      <Footer />
    </>
  );
}
export default AddPrices;
function getAllGarages() {
  throw new Error('Function not implemented.');
}

