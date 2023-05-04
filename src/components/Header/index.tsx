import { useContext } from 'react';
import { StyledHeader } from './style';
import { UserContext } from '../../contexts/UserContext';
import { FiEdit3, FiLogOut } from 'react-icons/fi';
import { MdAlternateEmail } from 'react-icons/md';
import { GrPhone, GrContactInfo } from 'react-icons/gr';

export const Header = () => {
	const { user } = useContext(UserContext);

	return (
		<StyledHeader>
			<div className="card_profile">
				<GrContactInfo />
				<p>{user?.fullName}</p>
			</div>
			<div className="card_profile">
				<MdAlternateEmail />
				<p>{user?.email}</p>
			</div>
			<div className="card_profile">
				<GrPhone />
				<p>{user?.phone}</p>
			</div>
			<button className="edit_profile">
				<FiEdit3 />
			</button>
			<button className="logout" onClick={() => {}}>
				<FiLogOut />
			</button>
		</StyledHeader>
	);
};
