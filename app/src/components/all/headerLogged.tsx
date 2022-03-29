import React from 'react';
import { Link } from 'react-router-dom';

import './all.scss';

function HeaderLogged(): JSX.Element {
  return (
    <>
      <div className="headerLogged">
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
export default HeaderLogged;
