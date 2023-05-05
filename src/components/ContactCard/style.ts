import styled from 'styled-components';

export const StyledContactCard = styled.li`
	position: relative;

	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 10px;

	min-width: 45%;
	width: 45%;
	height: 200px;
	padding: 16px;

	background-color: #fff;

	color: var(--primary-green);

	box-shadow: -8px 8px 20px rgba(0, 0, 0, 1);

	button {
		position: absolute;
		top: 10px;
		right: 10px;

		width: fit-content;

		svg {
			font-size: 24px;
			opacity: 0.6;
		}

		background-color: transparent;
		border: none;

		&:hover {
			svg {
				opacity: 1;
			}
		}
	}

	.contact_data {
		display: flex;
		align-items: center;
		gap: 20px;

		font-size: 20px;
		font-weight: 500;

		svg {
			font-size: 24px;
			color: var(--primary-green);
		}
	}

	@media (max-width: 1200px) {
		width: 80%;
	}

	@media (max-width: 390px) {
		width: 90%;
	}
`;
