import styled from 'styled-components';

export const Button = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;

	width: fit-content;
	height: 53.6px;
	padding: 8px;

	background: transparent;

	border-radius: 8px;

	text-transform: uppercase;
	font-weight: 600;
	font-size: 14px;

	color: var(--primary-green);

	&:hover {
		box-shadow: 0px 5px 5px rgba(77, 84, 59, 0.7);
		transition: 0.5s;
	}
`;
