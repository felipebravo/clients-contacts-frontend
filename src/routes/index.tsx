import { Route, Routes } from 'react-router-dom';
import { Login } from '../pages/Login';
import { SignUp } from '../pages/SignUp';
import { HomePage } from '../pages/Homepage';

export const MainRoutes = () => {
	return (
		<Routes>
			<Route path="/login" element={<Login />} />
			<Route path="/signup" element={<SignUp />} />
			<Route path="/homepage" element={<HomePage />} />
			<Route path="*" element={<Login />} />
		</Routes>
	);
};
