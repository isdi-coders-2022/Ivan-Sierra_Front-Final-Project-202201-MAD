import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import * as actions from '../../redux/user/actions-creator';
import './all.scss';

function Header(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const result: any = useSelector((state: any) => state.garage);

  function handleLogin() {
    if (result.isLogged) {
      dispatch(actions.logout());
      console.log('HAS DESLOGEADO');
    } else {
      console.log(Error);
    }
  }

  return (
    <div className="header">
      <nav>
        <Link to="/login/">
          <button className="buttonHeader" onClick={handleLogin}>
            {result.isLogged ? 'LOGOUT ' : 'LOGIN'}
          </button>
        </Link>

        <Link to="/register/">
          <button className="buttonHeader">REGISTER</button>
        </Link>
      </nav>

      <h1>
        FIX
        <span>CAR</span>
      </h1>
    </div>
  );
}
export default Header;
