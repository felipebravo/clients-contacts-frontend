import styled from 'styled-components';

export const StyledContactCard = styled.li`
	width: 300px;
	padding: 16px;

	background-color: #fff;

	box-shadow: -8px 8px 20px rgba(0, 0, 0, 1);

	.contact_data {
		display: flex;
		align-items: center;
		gap: 20px;

		font-size: 20px;
		font-weight: 500;

		svg {
			font-size: 24px;
		}
	}
`;
