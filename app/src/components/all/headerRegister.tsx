import React from 'react';
import { Link } from 'react-router-dom';

import './all.scss';

function HeaderRegister(): JSX.Element {
  return (
    <>
      <div className="headerRegister">
        <nav>
          <Link to="/">
            <button className="buttonHeader">HOME</button>
          </Link>
        </nav>
        <div>
          <h1>
            FIX
            <span>CAR</span>
          </h1>
        </div>
      </div>
    </>
  );
}
export default HeaderRegister;
