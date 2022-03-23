import React from 'react';
import './all.scss';
import '../user/login.scss';

function Footer(): JSX.Element {
  return (
    <div className="footer">
      <div>
        <h2>
          FIX
          <span>CAR</span>
        </h2>
        <p>Calle Mierdaseca 45</p>
        <p>28320 Pinto,Madrid</p>
        <p>91 675 76 32</p>
        <p>2022 ©Fixcar</p>
      </div>
    </div>
  );
}
export default Footer;
