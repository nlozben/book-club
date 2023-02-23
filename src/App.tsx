import React from 'react';
import logo from './logo.svg';
import ProfilePic from './components/ProfilePic'
import SwipeButton from './components/SwipeButton'
import './App.css';

const App = () => {
  return (
    <div className="App">
      <ProfilePic />
      <SwipeButton title="left swipe"/>
      <SwipeButton title="right swipe"/>
    </div>
  );
}

export default App;
