import { useContext } from 'react';
// import { ContactCard } from '../../components/ContactCard';
import { Footer } from '../../components/Footer';
import { Main } from '../../components/Main';
import { UserContext } from '../../contexts/UserContext';
import { Header } from '../../components/Header';
import { Navigate } from 'react-router-dom';
import { EditeUser } from '../../components/Modal/EditUser';
import { Contacts } from '../../components/ContactsUl';
import { ContactContext } from '../../contexts/ContactContext';
import { CreateContact } from '../../components/Modal/CreateContact';
import { EditContact } from '../../components/Modal/EditContact';

export const HomePage = () => {
	const { user, editUserModal } = useContext(UserContext);
	const { createContactModal, editContactModal } = useContext(ContactContext);

	return (
		<>
			{user ? (
				<Main>
					<Header />
					<Contacts />
					<Footer />
					{editUserModal && <EditeUser />}
					{createContactModal && <CreateContact />}
					{editContactModal && <EditContact />}
				</Main>
			) : (
				<Navigate to="/" replace />
			)}
		</>
	);
};
