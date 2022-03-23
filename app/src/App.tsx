import React from 'react';

import './App.css';
import Header from './components/all/header';
import Home from './components/all/home';
import TallerForm from './components/user/add.taller';

function App(): JSX.Element {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
