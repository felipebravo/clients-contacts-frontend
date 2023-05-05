import styled from 'styled-components';

export const StyledHeader = styled.header`
	position: absolute;
	top: 0;

	display: flex;
	align-items: center;
	justify-content: center;
	gap: 20px;

	width: 100%;
	height: 100px;
	padding: 10px;

	.edit_profile {
		background-color: transparent;
		border: none;

		svg {
			font-size: 24px;
			opacity: 0.5;
		}

		&:hover {
			svg {
				opacity: 1;
			}
		}
	}

	.logout {
		background-color: transparent;
		border: none;

		svg {
			font-size: 24px;
			opacity: 0.5;
		}

		&:hover {
			svg {
				color: var(--primary-red);
				opacity: 1;
			}
		}
	}

	.card_profile {
		display: flex;
		flex-direction: column;
		align-items: center;

		font-size: 20px;
		font-weight: 500;

		svg {
			font-size: 24px;
		}
	}

	@media (max-width: 624px) {
		flex-direction: column;
		height: fit-content;
	}
`;
