import styled from 'styled-components';

export const StyledDivContacts = styled.div`
	display: flex;
	gap: 10px;

	color: var(--primary-green);

	button {
		background-color: transparent;
		border: none;

		svg {
			font-size: 32px;
			opacity: 0.6;
		}

		&:hover {
			svg {
				opacity: 1;
			}
		}
	}
`;

export const StyledUl = styled.ul`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	gap: 10px;

	overflow-y: auto;

	width: 60vw;
	height: 60vh;
	padding: 20px;

	box-shadow: -8px 8px 20px rgba(0, 0, 0, 1);

	@media (max-width: 768px) {
		width: 90vw;
	}

	@media (max-width: 624px) {
		position: absolute;
		bottom: 100px;

		height: 220px;
	}
`;
