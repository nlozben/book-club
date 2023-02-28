import React from 'react';
import ExampleHome from '../components/ExampleHome'
import { Routes, Route } from 'react-router-dom';

const ExampleRouter = () => {
  return (
		<Routes>
			<Route path='/' element={<ExampleHome />} />
		</Routes>

  );
}

export default ExampleRouter;
