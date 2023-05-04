import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
	width: fit-content;
	height: 53.6px;
	padding: 16px 0 0 0;

	border-radius: 8px;

	text-transform: uppercase;
	text-decoration: none;
	font-weight: 600;
	font-size: 14px;

	color: var(--primary-green);

	:hover {
		box-shadow: 0px 5px 5px rgba(77, 84, 59, 0.7);
		transition: 0.5s;
	}
`;
