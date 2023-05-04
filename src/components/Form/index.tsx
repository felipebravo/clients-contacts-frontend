import { ReactNode } from 'react';
import { StyledBorder, StyledDivForm, StyledForm } from './style';

export const Form = ({ children }: React.HTMLAttributes<ReactNode>) => {
	return (
		<StyledDivForm>
			<StyledBorder>
				<div className="aspiral_border" />
				<div className="aspiral_border" />
				<div className="aspiral_border" />
				<div className="aspiral_border" />
				<div className="aspiral_border" />
				<div className="aspiral_border" />
				<div className="aspiral_border" />
				<div className="aspiral_border" />
				<div className="aspiral_border" />
				<div className="aspiral_border" />
			</StyledBorder>
			<StyledForm>{children}</StyledForm>
		</StyledDivForm>
	);
};
