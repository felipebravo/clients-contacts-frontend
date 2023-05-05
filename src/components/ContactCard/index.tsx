import { MdAlternateEmail } from 'react-icons/md';
import { GrPhone, GrContactInfo } from 'react-icons/gr';
import { FiEdit3 } from 'react-icons/fi';
import { StyledContactCard } from './style';
import { ContactContext, iContact } from '../../contexts/ContactContext';
import { useContext } from 'react';

interface iProps {
	contact: iContact;
	index: number;
}

export const ContactCard = (props: iProps) => {
	const { contact, index } = props;

	const { setEditContactModal, setSelectedContact } =
		useContext(ContactContext);

	return (
		<StyledContactCard key={index}>
			<button
				onClick={() => {
					setEditContactModal(true);
					setSelectedContact(contact);
				}}
			>
				<FiEdit3 />
			</button>
			<div className="contact_data">
				<GrContactInfo />
				<p>{contact.fullName}</p>
			</div>
			<div className="contact_data">
				<MdAlternateEmail />
				<p>{contact.email}</p>
			</div>
			<div className="contact_data">
				<GrPhone />
				<p>{contact.phone}</p>
			</div>
		</StyledContactCard>
	);
};
