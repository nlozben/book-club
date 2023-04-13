import React from 'react';
import UserProfile from './UserProfile/UserProfile';
import SwipeButton from './SwipeButton';
import { Grid } from "@mui/material";

const Home = () => (
	<Grid container direction="column" spacing={2}>
		<Grid item>
			<UserProfile />
		</Grid>
		<Grid item>
			<SwipeButton title="💀"/>
			<SwipeButton title="❤️"/>
		</Grid>
	</Grid>
);

export default Home;
