import { MdAlternateEmail } from 'react-icons/md';
import { GrPhone, GrContactInfo } from 'react-icons/gr';
import { StyledContactCard } from './style';
import { iUser } from '../../contexts/UserContext';

interface iProps {
	contact: iUser;
	index: number;
}

export const ContactCard = (props: iProps) => {
	const { contact, index } = props;

	return (
		<StyledContactCard key={index}>
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
