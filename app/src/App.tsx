import React from 'react';

import './App.css';
import Footer from './components/all/footer';
import Header from './components/all/header';
import Home from './components/all/home';
import AddPrices from './components/all/myGarage/myGarage';
import TallerForm from './components/user/add.taller';

function App(): JSX.Element {
  return (
    <div className="App">
      <Header />
      <AddPrices />
      <Footer />
    </div>
  );
}

export default App;
