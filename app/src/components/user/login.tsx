import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
import './login.scss';
import { login, insertGarage } from '../../services/garages';

function LoginForm(mode: any): JSX.Element {
  const [user, setUser] = useState({ name: '', pass: '' });

  function handleChange(ev: any): void {
    setUser({ ...user, [ev.target.name]: ev.target.value });
  }

  function handleSubmit(ev: any): void {
    ev.preventDefault();

    try {
      let result;
      if (mode.toLowerCase() === 'login') {
        result = login({ ...user });
      } else {
        result = insertGarage(user);
      }
      dispatch(actions.login({ ...result.data, isLogged: true }));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form>
      <h3>Login</h3>
      <p>You User</p>
      <legend>
        {mode.toLowerCase() === 'login' ? 'Login' : 'Registration'}
      </legend>
      <label htmlFor="user">
        <input
          id="user"
          type="text"
          name="user"
          onChange={handleChange}
          value={user.name}
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

      <button type="submit" onClick={handleSubmit}>
        {mode.toLowerCase() === 'login' ? 'Login' : 'Registration'}
        Login
      </button>
    </form>
  );
}
export default LoginForm;
