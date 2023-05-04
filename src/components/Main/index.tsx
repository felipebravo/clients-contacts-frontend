import { ReactNode } from 'react';
import { StyledMain } from './style';

export const Main = ({ children }: React.HTMLAttributes<ReactNode>) => {
	return <StyledMain>{children}</StyledMain>;
};
