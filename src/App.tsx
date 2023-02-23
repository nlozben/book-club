import React from 'react';
import logo from './logo.svg';
import ProfilePic from './components/ProfilePic'
import SwipeButton from './components/SwipeButton'
import { Grid } from "@mui/material";
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <ProfilePic />
        </Grid>
        <Grid item>
          <SwipeButton title="left swipe"/>
          <SwipeButton title="right swipe"/>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
