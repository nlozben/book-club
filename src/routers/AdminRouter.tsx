import React from 'react';
import AdminHome from '../components/AdminHome'
import { Routes, Route } from 'react-router-dom';

const AdminRouter = () => {
  return (
		<Routes>
			<Route path='/' element={<AdminHome />} />
		</Routes>

  );
}

export default AdminRouter;
