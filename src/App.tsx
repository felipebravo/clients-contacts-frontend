import { GlobalStyle } from './styles/global';
import { MainRoutes } from './routes';
import { UserProvider } from './contexts/UserContext';
import { ContactProvider } from './contexts/ContactContext';

const App = () => {
	return (
		<>
			<GlobalStyle />
			<UserProvider>
				<ContactProvider>
					<MainRoutes />
				</ContactProvider>
			</UserProvider>
		</>
	);
};

export default App;
