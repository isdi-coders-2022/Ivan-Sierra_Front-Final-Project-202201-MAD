import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './login.scss';

function LoginForm(): JSX.Element {
  const [user, setUser] = useState({ user: '', pass: '' });
  const dispatch = useDispatch();

  function handleChange(ev: any): void {
    return setUser({ ...user, [ev.target.name]: ev.target.value });
  }

  function handleSubmit(ev: any): void {
    ev.preventDefault();

    try {
      let result;
      if (mode.toLowerCase() === 'login') {
        result = await login(user);
      } else {
        result = await register(user);
      }
      dispatch(actions.login({ ...result.data, isLogged: true }));
      setShowForm(false);
    } catch (error) {
      console.log(error);
    }
  }

  const handleCancel = () => {
    setShowForm(false);
  };

  return (
    <form>
      <h3>Login</h3>
      <p>You User</p>
      <label htmlFor="user">
        <input id="user" type="text" name="user" value="user.user" />
      </label>
      <p>Password</p>
      <label htmlFor="pass">
        <input id="pass" type="text" name="pass" value="user.pass" />
      </label>

      <button type="submit">Login</button>
    </form>
  );
}
export default LoginForm;
