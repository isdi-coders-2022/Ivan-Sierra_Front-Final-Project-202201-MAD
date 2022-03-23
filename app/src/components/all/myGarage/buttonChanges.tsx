import React from 'react';

import './myGarage.scss';

function ButtonAddChanges(): JSX.Element {
  return (
    <div className="buttonMyGarage">
      <button className="sendChanges" type="submit">
        Guardar Cambios
      </button>
    </div>
  );
}
export default ButtonAddChanges;
