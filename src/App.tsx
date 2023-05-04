import { GlobalStyle } from './styles/global';
import { MainRoutes } from './routes';
import { UserProvider } from './contexts/UserContext';

const App = () => {
	return (
		<>
			<GlobalStyle />
			<UserProvider>
				<MainRoutes />
			</UserProvider>
		</>
	);
};

export default App;
