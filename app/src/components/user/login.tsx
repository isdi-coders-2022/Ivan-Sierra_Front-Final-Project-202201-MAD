import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './login.scss';
import { login, insertGarage } from '../../services/garages';
import { GarageLoginI } from '../../interfaces/garageLogin';
import * as actions from '../../redux/user/actions-creator';
import { useNavigate } from 'react-router-dom';
import Header from '../all/header';

function LoginForm(): JSX.Element {
  const [user, setUser] = useState<GarageLoginI>({ name: '', pass: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleChange(ev: any): void {
    setUser({ ...user, [ev.target.name]: ev.target.value });
  }

  async function handleSubmit(ev: any) {
    ev.preventDefault();
    try {
      const result = await login(user);

      dispatch(actions.login({ ...result.data, isLogged: true }));
      navigate('/taller');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Header />
      <form onSubmit={handleSubmit}>
        <h3>Login</h3>
        <p>You User</p>

        <label htmlFor="user">
          <input
            id="user"
            type="text"
            name="name"
            onChange={handleChange}
            value={user.name.toLocaleUpperCase()}
          />
        </label>
        <p>Password</p>
        <label htmlFor="pass">
          <input
            id="pass"
            type="text"
            name="pass"
            onChange={handleChange}
            value={user.pass}
          />
        </label>

        <button type="submit">Login</button>
      </form>
    </>
  );
}
export default LoginForm;
