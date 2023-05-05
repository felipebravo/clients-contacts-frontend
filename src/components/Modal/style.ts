import styled from 'styled-components';

export const StyledModal = styled.div`
	position: fixed;
	inset: 0;

	width: 100%;
	height: 100vh;

	z-index: 101;
`;

export const StyledOverlay = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	width: 100%;
	height: 100vh;

	background-color: rgba(0, 0, 0, 0.5);
`;

export const StyledContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;

	width: 500px;
	height: fit-content;
	max-height: 90vh;

	border-radius: 10px;

	background-color: var(--bg-primary-color);
`;

export const DivHeaderModal = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	width: 100%;
	padding: 10px;

	border-top-right-radius: 8px;
	border-top-left-radius: 8px;

	background-color: var(--border-primary-color);

	color: var(--bg-primary-color);

	button {
		background-color: transparent;
		border: none;

		color: var(--bg-primary-color);

		svg {
			font-size: 32px;
		}

		&:hover {
			svg {
				color: var(--primary-green);
				transition: 0.5s;
			}
		}
	}
`;

export const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;

	width: 100%;
	height: 100%;
	padding: 10px;

	overflow-y: auto;

	.borderline {
		border-bottom: 1px solid var(--primary-green);

		padding: 0;
	}
`;

export const DivButtonsModal = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 30px;

	width: 100%;

	color: var(--primary-green);
`;
