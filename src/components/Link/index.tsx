import { StyledLink } from './style';

interface LinkProps {
	to: string;
	children: React.ReactNode;
}

export const Link = ({ children, to }: LinkProps) => {
	return <StyledLink to={to}>{children}</StyledLink>;
};
