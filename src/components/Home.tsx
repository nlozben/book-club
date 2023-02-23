import React from 'react';
import ProfilePic from './ProfilePic'
import SwipeButton from './SwipeButton'
import { Grid } from "@mui/material";

const Home = () => (
	<Grid container direction="column" spacing={2}>
		<Grid item>
			<ProfilePic />
		</Grid>
		<Grid item>
			<SwipeButton title="left swipe"/>
			<SwipeButton title="right swipe"/>
		</Grid>
	</Grid>
);

export default Home;
