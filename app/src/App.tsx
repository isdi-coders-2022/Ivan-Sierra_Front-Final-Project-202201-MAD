import React from 'react';

import './App.css';
import Header from './components/all/header';
import TallerForm from './components/user/add.taller';

function App(): JSX.Element {
  return (
    <div className="App">
      <Header />
      <TallerForm />
    </div>
  );
}

export default App;
