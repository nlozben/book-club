import React from 'react';
import logo from './logo.svg';
import SwipeButton from './components/SwipeButton'
import './App.css';

const App = () => {
  return (
    <div className="App">
      <SwipeButton/>
      <button>
        Right swipe
      </button>
    </div>
  );
}

export default App;
