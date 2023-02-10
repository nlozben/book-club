import React from 'react';
import logo from './logo.svg';
import SwipeButton from './components/SwipeButton'
import './App.css';

const App = () => {
  return (
    <div className="App">
      <SwipeButton title="left swipe"/>
      <SwipeButton title="right swipe"/>
    </div>
  );
}

export default App;
