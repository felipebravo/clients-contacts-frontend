import { useContext } from 'react';
import { ContactCard } from '../ContactCard';
import { StyledDivContacts, StyledUl } from './style';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import { ContactContext } from '../../contexts/ContactContext';

export const Contacts = () => {
	const { contacts, setCreateContactModal } = useContext(ContactContext);

	return (
		<>
			<StyledDivContacts>
				<h3>Adicionar novo contato</h3>
				<button
					onClick={() => {
						setCreateContactModal(true);
					}}
				>
					<AiOutlineUsergroupAdd />
				</button>
			</StyledDivContacts>
			<StyledUl>
				{contacts?.map((contact, index) => (
					<ContactCard contact={contact} index={index} />
				))}
			</StyledUl>
		</>
	);
};
