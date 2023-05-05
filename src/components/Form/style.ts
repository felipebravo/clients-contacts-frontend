import styled from 'styled-components';

export const StyledDivForm = styled.div`
	display: flex;

	width: 500px;
	height: fit-content;
	max-height: 90vh;

	background-color: var(--bg-color2);

	background-image: linear-gradient(
		to bottom,
		transparent 10px,
		var(--border-color2) 10px,
		var(--border-color2) 11px,
		transparent 11px
	);
	background-size: 10px 36px;

	box-shadow: -8px 8px 20px rgba(0, 0, 0, 1);

	@media (max-width: 500px) {
		width: 90%;
	}
`;

export const StyledBorder = styled.div`
	background-color: var(--border-primary-color);

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;

	width: 10%;
	height: 100%;

	.aspiral_border {
		background-color: var(--bg-primary-color);

		width: 14px;
		height: 14px;

		border-radius: 50%;
		box-shadow: inset 5px 0px 5px rgba(0, 0, 0, 1);
	}
`;

export const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 20px;

	width: 100%;
	height: 100%;

	.form_title {
		height: 53.6px;

		color: var(--primary-green);
	}

	.form_paragraph {
		height: 53.6px;
		padding-top: 16px;
	}
`;
