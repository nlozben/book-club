import React from 'react';
import AppHome from '../components/AppHome'
import { Routes, Route } from 'react-router-dom';

const AppRouter = () => {
  return (
		<Routes>
			<Route path='/' element={<AppHome />} />
		</Routes>

  );
}

export default AppRouter;
