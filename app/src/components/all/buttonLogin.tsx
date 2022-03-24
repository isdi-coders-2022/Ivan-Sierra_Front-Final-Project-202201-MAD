import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../redux/user/actions-creator";
import TallerForm from "../user/add.taller";
import LoginForm from "../user/login.js";

export function ButtonLogin() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [showLogin, setShowLogin] = useState(false);
  const [showRegistration, setShowRegistration] = useState(false);

  const handleLogin = () => {
    if (user.isLogged) {
      dispatch(actions.logout());
    } else {
      setShowLogin(true);
    }
  };

  const handleRegistration = () => {
    setShowRegistration(true);
  };

  return (
    <div>
      {!showLogin && (
        <button onClick={handleLogin}>
          {user.isLogged ? "Logout" : "Login"}
        </button>
      )}
      {!showLogin && !user.isLogged && (
        <button onClick={handleRegistration}>Agregar Taller</button>
      )}
      {showLogin && <LoginForm setShowForm={setShowLogin} mode="login" />}
      {showRegistration && (
        <TallerForm setShowForm={setShowRegistration} mode="registration" />
      )}
    </div>
  );
}
