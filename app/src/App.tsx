import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Footer from './components/all/footer';
import Header from './components/all/header';
import Home from './components/all/home';
import AddPrices from './components/all/myGarage/myGarage';
import TallerForm from './components/all/myGarage/registerGarage';
import LoginForm from './components/user/login';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<TallerForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/taller" element={<AddPrices />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
