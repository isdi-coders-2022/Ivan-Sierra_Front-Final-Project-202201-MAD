import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Footer from './components/all/footer';
import Header from './components/all/header';
import Home from './components/all/home';
import AddPrices from './components/all/myGarage/myGarage';
import TallerForm from './components/user/add.taller';
import LoginForm from './components/user/login';

function App(): JSX.Element {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={Home} />
        <Route path="/tallerForm" element={TallerForm} />
        <Route path="/loginForm" element={LoginForm} />
        <Route path="/addPrices" element={AddPrices} />
      </Routes>

      <Header />
      <AddPrices />
      <Footer />
    </div>
  );
}

export default App;
