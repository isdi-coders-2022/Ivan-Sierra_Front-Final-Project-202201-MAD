import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import * as actions from '../../redux/user/actions-creator';
import './all.scss';

function Header(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //const user = useSelector((state) => state.user);
  const [showLogin, setShowLogin] = useState(false);

  function handleLogin() {
    /* if (user.isLogged) {
      dispatch(actions.logout());
    } else {
      setShowLogin(true);
    }*/
  }
  // {user.isLogged ? 'Logout' : 'Login'}
  return (
    <div>
      <nav>
        {!showLogin && (
          <Link to="/login/">
            <button onClick={handleLogin}>LOGIN</button>
          </Link>
        )}
        <Link to="/register/">
          <p>Register</p>
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
