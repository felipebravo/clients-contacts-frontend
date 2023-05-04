import { useContext } from 'react';
// import { ContactCard } from '../../components/ContactCard';
import { Footer } from '../../components/Footer';
import { Main } from '../../components/Main';
import { UserContext } from '../../contexts/UserContext';
import { Header } from '../../components/Header';
import { Navigate } from 'react-router-dom';

export const HomePage = () => {
	const { user } = useContext(UserContext);

	return (
		<>
			{user ? (
				<Main>
					<Header />
					<Footer />
				</Main>
			) : (
				<Navigate to="/" replace />
			)}
		</>
	);
};
