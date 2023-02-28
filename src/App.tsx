import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { getApp } from './utils/helpers';

const App = () => {

  const CurrentApp = getApp();

  return (
    <div className="App">
      <BrowserRouter>
        <CurrentApp />
      </BrowserRouter>
    </div>
  );
}

export default App;
