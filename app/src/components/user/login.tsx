import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
import './login.scss';

function LoginForm(): JSX.Element {
  const [user, setUser] = useState({ name: '', pass: '' });

  function handleChange(ev: any): void {
    setUser({ ...user, [ev.target.name]: ev.target.value });
  }

  function handleSubmit(ev: any): void {
    ev.preventDefault();
  }

  return (
    <form>
      <h3>Login</h3>
      <p>You User</p>
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

      <button type="submit" onSubmit={handleSubmit}>
        Login
      </button>
    </form>
  );
}
export default LoginForm;
